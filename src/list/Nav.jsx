import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div id='uniq-id'>
          <ul type='none'>
        
          
              <li><Link style={{ textDecoration: 'none' , color:'white'}} to='/Michael'>Michael</Link></li>
       
        <li><Link style={{textDecoration:'none'  , color:'white'}} to='/Lindsay'>Lindsay</Link></li>
        <li><Link style={{textDecoration:'none'  , color:'white'}} to='/Tobias'>Tobias</Link></li>
        <li><Link style={{textDecoration:'none'  , color:'white'}} to='/Byron'>Byron</Link></li>
        <li ><Link style={{textDecoration:'none ' , color:'white'}} to='/George'>George</Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/Rachel'>Rachel</Link></li>
              <li><Link style={{ textDecoration: 'none' , color:'white'}} to='/Search'>Search</Link></li>
      </ul>
    </div>
  )
}

export default Nav
