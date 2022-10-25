import React from 'react'
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainComponent from "../comp/MainComponent";

function Home() {
  return (
    <>
    <Header/>
    
    <MainComponent myName='Amir ben younes'/>

    <Footer/>
  </>
  )
}

export default Home
