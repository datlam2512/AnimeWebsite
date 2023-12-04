import './App.css';
import Main from './components/Main';
import Navfilm from './components/Navfilm';
import Footeranime from './components/Footeranime';
import { Routes,Route } from 'react-router-dom';
import Content from './components/Content';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';
import Login from './components/Login';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import {AuthContextProvider} from './Context/AuthContext'
import UserProfile from './components/UserProfile';
import ListUser from './components/Home'
function App() {
  return (
    <>
    <div className="App">
      <AuthContextProvider>
   <Navfilm/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/home/create' element={<UserCreate/>}></Route>
  <Route path='/home/edit/:id' element={<UserEdit/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/news' element={<News/>}></Route>
    <Route path='/home' element={<ListUser/>}></Route>
  </Routes>
  <Footeranime/>
  </AuthContextProvider>
    </div>
    </>
  );
}

export default App;
