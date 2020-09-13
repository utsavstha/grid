import React from 'react';
import './App.css';
import ImageDrop from './components/ImageDrop';
import Navbar from './components/Navbar';
import AppIconOption from './components/AppIconOption';
import Grid from './components/Grid';

function App() {


  return (
    <div className="mx-auto antialiased">
      {/* <Navbar />
      <div className="mx-auto flex justify-center">
        <ImageDrop />
        <AppIconOption /> */}
      <Grid />
      {/* </div> */}

    </div>
  );
}

export default App;
