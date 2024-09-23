import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateHerbs from './pages/CreateHerbs';
import DeleteHerbs from './pages/DeleteHerbs';
import ShowHerbs from './pages/ShowHerbs';
import EditHerbs from './pages/EditHerbs';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/herbs/create' element={<CreateHerbs />}/>
      <Route path='/herbs/details/:id' element={<ShowHerbs />}/>
      <Route path='/herbs/edit/:id' element={<EditHerbs />}/>
      <Route path='/herbs/delete/:id' element={<DeleteHerbs />}/>
    </Routes>
  );
};

export default App