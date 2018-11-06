import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Playground from './Playground';
import './App.css';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>
          Write your 
          <a href="https://solid.github.io/query-ldflex/">
            Solid LDflex</a> expression
        </h2>
        <Playground/>
      </main>
      <Footer/>
    </div>
  );
}
