import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar'
import AllRoutes from './Routes/allRoutes'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LoggedIn } from './Redux/action'


function App() {
const dispatch=useDispatch()

useEffect(() => {
 

  
}, []);

  return (
   <div>
    <Navbar/>
    <AllRoutes/>
   </div>
  )
}

export default App
