import { useState } from 'react'
import './App.css'
import Left from './Components/Left/Left'
import Center from './Components/Center/Center'
import Footer from './Components/Footer/Footer'
import Right from './Components/Right/Right'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'








function App() {





  return (
    <>
      <Header />







      <div id='routeContainer'>

        <div id='routerBody'>
          <Left />
          <Center />
          <Right />
        </div>
        <div>
          <Footer />
        </div>

      </div>



    </>

  )
}

export default App