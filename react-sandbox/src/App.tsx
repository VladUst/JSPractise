import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import {useEffect, useState} from 'react';
import PostContainer from './components/PostContainer';
import Navbar from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  const links = [
    {href:'/main', name:'Главная', icon:'home' },
    {href:'/instruments', name:'Инструменты', icon:'build' },
    {href:'/info', name:'Информация', icon:'info' },
    {href:'/contacts', name:'Контакты', icon:'contacts' },
  ];
  const [sidebarActive, setSidebarActive] = useState(false);
  const handleSidebar = () => {
    setSidebarActive(sidebarActive => !sidebarActive);
  }
  /* const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  useEffect(()=>{
    dispatch(fetchUsers());
  }, []);
  const errorMessage = error ? <h1>Fetching error: {error}</h1> : null;
  const loader = isLoading ? <h1>Loading...</h1> : null;
  const content = !(error || isLoading) ? JSON.stringify(users, null, 2) : null; */
  return (
      <div className="App">
        {/* {loader}
        {errorMessage}
        {content} */}
        <Navbar handleSidebar={handleSidebar}/>
        <Sidebar header='Меню' links={links} sidebarActive={sidebarActive} handleSidebar={handleSidebar}/>
        <Main>
          <PostContainer />
        </Main>
      </div>
  );
}

export default App;
