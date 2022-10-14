import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import {useEffect} from 'react';

function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  useEffect(()=>{
    dispatch(fetchUsers());
  }, []);
  const errorMessage = error ? <h1>Fetching error: {error}</h1> : null;
  const loader = isLoading ? <h1>Loading...</h1> : null;
  const content = !(error || isLoading) ? JSON.stringify(users, null, 2) : null;
  return (
      <div className="App">
        {loader}
        {errorMessage}
        {content}
      </div>
  );
}

export default App;
