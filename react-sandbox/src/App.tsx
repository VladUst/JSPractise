import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import { MainPage } from './pages/MainPage/MainPage';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Modal } from './components/Modal/Modal';
import AppRouter from './pages/AppRouter';

const routes = [
  {to:'/users', name:'Пользователи', icon:'home' },
  {to:'/tools', name:'Инструменты', icon:'build' },
  {to:'/info', name:'Информация', icon:'info' },
  {to:'/contacts', name:'Контакты', icon:'contacts' },
];

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const handleSidebar = () => {
    setSidebarActive(sidebarActive => !sidebarActive);
  }
  const handleModal = () => {
    setModalActive(modalActive => !modalActive);
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
        <Navbar sidebarActive={sidebarActive} handleSidebar={handleSidebar} handleModal={handleModal}/>
        <div className='content-page'>
          <Sidebar header='Меню' links={routes} sidebarActive={sidebarActive} handleSidebar={handleSidebar}/>
          <Modal handleModal={handleModal} modalActive={modalActive}>
            <form>
              <input type="text" placeholder='Ваше имя'/>
              <input type="password" placeholder='Пароль'/>
              <button type='submit'>Вход</button>
            </form>
          </Modal>
          <AppRouter/>
        </div>
      </div>
  );
}

export default App;
