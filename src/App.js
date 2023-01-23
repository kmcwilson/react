// import logo from './logo.svg';
import React, {useState}  from 'react';
import './App.css';
import Header  from './components/Header';
import PageContent from './components/PageContent';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage]=  useState('home')
  return (
  <div className="page-background">
 <Header setCurrentPage= {setCurrentPage} currentPage={currentPage}/>
 <PageContent currentPage={currentPage}/>
 <Skills/>
<Footer/>
 </div>


  );
}

export default App;
