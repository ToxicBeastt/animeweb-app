import React from 'react';
import './assets/css/main.css'
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Navbar from "./components/Navbar"
import Collection from './Pages/Collection';
import Home from './Pages/Home';
import AnimeDetail from "./Pages/AnimeDetail";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql.anilist.co/api/v2/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client} className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-collection" element={<Collection />}/>
          <Route path="/anime/:id" element={<AnimeDetail />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
