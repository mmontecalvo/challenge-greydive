import React from 'react';
import Home from './components/home/Home';
import TestView from './components/TestView/TestView';
import db from './data/db.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home clients={db} />} />
        {
          db.map((test) => {
            return (
              <Route path={"/" + test.cliente} element={<TestView client={test} />} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
