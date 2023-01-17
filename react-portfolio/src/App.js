// import logo from './logo.svg';
import React, {useState}  from 'react';
import './App.css';
import Header  from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage]=  useState('home')
  return (
  <div>
 <Header setCurrentPage= {setCurrentPage}/>
 <PageContent currentPage={currentPage}/>

 </div>


  );
}

export default App;
