import { IUser } from "../../models/IUser";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /* usersFetching(state){
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>){
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        } */
    },
    // createAsyncThunk будет на каждом этапе асинхронного действия выполнять тот или иной dispatch
    // dispatch({type: user/fetchAll/pending}) --> 
    // dispatch({type: user/fetchAll/fulfilled, payload: return...}) --> 
    // dispatch({type: user/fetchAll/rejected, payload: rejectWithValue})
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})
export default userSlice.reducer;