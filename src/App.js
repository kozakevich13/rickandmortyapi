import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//compontents
import Header from './components/Header/Header';

import Home from './container/Home/Home';
import Characters from './container/Characters/Characters';
import CharacterDetails from './container/Characters/CharacterDetails';
import Location from './container/Location/Location';
import Episode from './container/Episode/Episode';

export default function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="character">
              <Route index={true} element={<Characters />} />
              <Route path=":id" element={<CharacterDetails />} />
            </Route>
            <Route path="/location">
              <Route index={true} element={<Location />} />
              <Route path=":id" element={<CharacterDetails />} />
            </Route>
            <Route path="/episode">
              <Route index={true} element={<Episode />} />
              <Route path=":id" element={<CharacterDetails />} />
            </Route>
          </Routes>
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}
