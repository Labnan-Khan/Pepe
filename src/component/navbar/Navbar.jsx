import React, { useState } from 'react'
import th from './th.jpg'
import open from './open.png'
import close from './close.png'
import './nav.css'



function Navbar() {
    const [dropdownMenu,setDropdownMenu] = useState("navUl")
    const [dropmenu,setDropmenu] = useState(false)
        const dropdown =() =>{
            if(dropdownMenu == "navUl"){
                setDropdownMenu(dropdownMenu + " navUlDropdown")
                setDropmenu(true)
            }
            else {
                setDropdownMenu("navUl")
                setDropmenu(false)
            }
        }
      
  return (
    <div className='nav'>
      <div className='logo'>
      <a href="#home"><img src={th} alt="" /></a>
      <p><a href="#home">PEPE</a></p>
      </div>
      <button onClick={dropdown}  className='dropdownbtn'>   <img src={dropmenu? close : open} alt="" /> </button>
      <ul onClick={dropdown} className={dropdownMenu}>

        <li><a href="#home">Home</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#howToBuy">How to buy</a></li>
        {/* <li><a href="#bridge">Bridge</a></li> */}
        <li><a href="#tokenomic">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </div>
  )
}

export default Navbar
