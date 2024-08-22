import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Messeges from './Components/Messeges/Messeges'
import Profile from './Components/Profile/Profile'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      {/* <App/> */}
      <Routes>


        <Route path='/' element={<App />}>

          <Route path='profile' element={<Profile />} />


          <Route path='messeges' element={<Messeges />} />


        </Route>
      </Routes>




    </BrowserRouter >

  </StrictMode >,
)
