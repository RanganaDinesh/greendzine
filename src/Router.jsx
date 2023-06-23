import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Component from './Component'
import './App.css';
import Michael from './list/Michael'
import Lindsay from './list/Lindsay'
import Tobias from './list/Tobias'
import Byron from './list/Byron'
import George from './list/George'
import Rachel from './list/Rachel'
import Nav from './list/Nav';

const Router = () => {
  return (
      <div>
           <BrowserRouter>
         <Routes>
     
     
          <Route path='/' element={ <Nav/>} />
          <Route path='/Search' element={ <Component/>} />
          <Route path='/Michael' element={<Michael/>}/>
          <Route path='/Lindsay' element={<Lindsay/>}/>
          <Route path='/Tobias' element={<Tobias/>}/>
          <Route path='/Byron' element={<Byron/>}/>
          <Route path='/George' element={<George/>}/>
          <Route path='/Rachel' element={<Rachel/>}/>
          
     
     
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Router
