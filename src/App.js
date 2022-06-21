import React, { useState } from 'react';
import './assets/css/main.css'
import './App.css';
import {
  ApolloProvider
} from "@apollo/client";

import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Navbar from "./components/Navbar"
import Collection from './Pages/Collection';
import Home from './Pages/Home';
import AnimeDetail from "./Pages/AnimeDetail";
import Login from './Pages/Login'

import client from "./Api/Client"
import Verify from './Pages/Verify';

function App() {
  return (
    <ApolloProvider client={client} className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/home/" element={<Home />} />
          <Route path="/my-collection/" element={<Collection />}/>
          <Route path="/anime/:id/" element={<AnimeDetail />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
