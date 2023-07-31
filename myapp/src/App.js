import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import Test from './components/Test';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Test/>}/>
        <Route exact path="/user" element={<User/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App;