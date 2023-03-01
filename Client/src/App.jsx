import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar'
import AllRoutes from './Routes/allRoutes'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LoggedIn } from './Redux/action'
import Footer from './components/footer'
import { Box } from '@chakra-ui/react'


function App() {
const dispatch=useDispatch()

useEffect(() => {
 

  
}, []);

  return (
   <Box>
    <Navbar/>
    <AllRoutes />
    <Footer/>
   </Box>
  )
}

export default App
