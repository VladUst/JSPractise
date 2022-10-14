import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
// асинхронный action creator необходим для асинхронной обработки действий - диспатчить нужные actions в асинхронном потоке
// (объект action = {type: ..., payload: ...} будет грамотно генерироваться в асинхронном потоке кода)
// redux thunk middleware уже идет из коробки - достаточно лишь вернуть из функции функцию с dispatch,
// а затем поместить ее в основной dispatch(fetchUsers())
/* export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (error) {
        dispatch(userSlice.actions.userFetchingError(error.message));
    }
} */

// redux toolkit позволяет упростить процесс, заменив стандартный redux thunk на createAsyncThunk,
// тогда уже сразу для него будет создано 3 состояния: pending, rejected, fulfilled,
// которые будут обрабатываться уже без вызовов конкретных dispatch (toolkit сделает это за нас)
export const fetchUsers = createAsyncThunk(
    'user/fetchAll', // название асинхронного thunka
    async(_, thunkApi) => { // колбэк для реализации кокретного действия
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('Can not find users')
        }
    }
)