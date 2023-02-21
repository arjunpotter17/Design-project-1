import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => {
    return (
      <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is GPT3</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </>
    )
  }

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar__links'>
        <div className='gpt3__navbar__links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar__links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar_sign'>
        <p>
          sign in
        </p>
        <button type='button'>
          Sign Up
        </button>
      </div>
      <div className='gpt3__navbar_menu'>
        {
          toggleMenu
            ?
            <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar_menu_container scale-up-center'>
              <div className='gpt3__navbar_menu_container_links' >
                <Menu />
              </div>
              <div className="gpt3__navbar_menu_container_links_sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar