import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Header.css"

const Header = ({Title1,Title2,Title3,Title4,Title5,Title6}) => {
  return (
    <div className='Main-Header-Container'>
  
      <p className='Nav-link'><Link to='/AboutUs'>{Title1}</Link> </p>
      <p className='Nav-link'><Link to='/Login'>{Title2}</Link> </p>
      <p className='Nav-link'><Link to='/ContactUs'>{Title3}</Link></p>
      <p className='Nav-link'> <Link to ='/Service'>{Title4}</Link> </p>
      <p className='Nav-link'><Link to ='/Registration'>{Title5}</Link></p>
      <p className='Nav-link'><Link to ='/Registration'>{Title6}</Link></p>
    </div>
  )
}

export default Header;
