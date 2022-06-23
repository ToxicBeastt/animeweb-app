import React from 'react';
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
import client from "./Api/Client"
import CollectionDetail from './Pages/CollectionDetail';

function App() {
  return (
    <ApolloProvider client={client} className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-collections/" element={<Collection />}/>
          <Route path="/anime/:id/" element={<AnimeDetail />}/>
          <Route path="/collection/:collectionId/" element={<CollectionDetail/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
