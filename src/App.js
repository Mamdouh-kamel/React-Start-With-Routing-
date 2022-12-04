import React, { Component } from 'react'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import { Outlet } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Outlet />
      <Footer/>

      </>
      
    

    )
  }
}
