"use client"

import { links } from '@/src/utils/data'
import './NavBar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    // const {navStyle, setNavStyle} = useState("")
    // const {scrollYProgress} = useScroll()
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //   if(latest > 0.2) {
    //     setNavStyle("sticky")
    //   } else {
    //     setNavStyle("")
    //   }
    // })
  return (
    <nav className={`nav__wrapper`}>
        <div className="container nav__container">
            <div className='nav__logo'>
               <h1>GbemigaCodes</h1>   
            </div>
          <div className={`nav__links-menu ${toggleNav ? 'show_nav' : "hide_nav"}`}>
            <ul className="nav__links">
                {
                    links.map(({name, path}, index) => (
                        <li key={index + name}><a href={`#${path}`}>{name}</a></li>
                    ))
                }
            </ul>
            <button>Get funded</button>
          </div>

        
          <button
           className='nav__menu-btn'
           onClick={() => setToggleNav(prev => !prev)}
           >
          {
            !toggleNav ?
            <BiMenuAltRight size={30} />
            : <RxCross2 size={30} />
          }
        </button>
          </div>
    </nav>
  )
}

export default NavBar