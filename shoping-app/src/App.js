import React from 'react';
import TavarKiritish from './components/Tavar/kiritish/tavar-kiritish';
import TavarTable from './components/Tavar/kurish/TavarTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateDataTavar from './components/Tavar/update/UpdateDataTavar'
import Dukon from "./components/Dukon/kiritish/Dukon"
import DukonTable from './components/Dukon/kurish/DukonTable'
import UpdateDataDukon from './components/Dukon/update/UpdateDataDukon'
const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TavarKiritish />}/>
          <Route path="/tavar" element={<TavarTable />}/>
          <Route path="/update/:id" element={<UpdateDataTavar />} />
          <Route path="/updatedukon/:id" element={<UpdateDataDukon />} />
          <Route path="/dukon-kiritish" element={<Dukon />} /> 
          <Route path="/dukon-kurish" element={<DukonTable />} /> 
          

        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;