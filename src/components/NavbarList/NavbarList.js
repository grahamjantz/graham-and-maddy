import React, { useState } from 'react'
import Button from '../Button/Button';
import './NavbarList.css'
import { NavLink } from 'react-router-dom';

const NavbarList = () => {

    const [sideNavClass, setSideNavClass] = useState('inactive');

    const slideIn = () => {
        sideNavClass === 'inactive' ? setSideNavClass('active') : setSideNavClass('inactive')
    }

    const ranNum = () => {
        return Math.floor(Math.random() * 10000)
    }

    const navbarArr = [
        {
            text: 'HOME',
            href: '/',
            id: ranNum()
        },
        {
            text: 'OUR STORY',
            href: '/our-story',
            id: ranNum()
        },
        {
            text: 'DETAILS',
            href: '/details',
            id: ranNum()
        },
        {
            text: 'FAQ',
            href: '/faq',
            id: ranNum()
        },
        {
            text: 'DIRECTIONS',
            href: '/directions',
            id: ranNum()
        },
        // {
        //     text: 'REGISTRY',
        //     href: '/registry',
        //     id: ranNum()
        // },
        {
            text: 'RSVP',
            href: '/rsvp',
            id: ranNum()
        },
    ];

    const navbarMap = navbarArr.map((item) => {
        return (
            <li key={item.id}>
                <NavLink to={`${item.href}`} className='navLink'>
                    <Button 
                        text={item.text}
                        className='nav-btn'
                        slideIn={slideIn}
                    />
                </NavLink>
            </li>
        )
    });


  return (
    <div className='navbar'>
        <div className='banner'>
            <NavLink to='/' className='gm-badge'>
                G&M
            </NavLink>
            <div 
                id="navMenu" 
                className={sideNavClass} 
                onClick={() => {
                    slideIn();
                    }}>
                <span style={{ backgroundColor: '#EEE2D2'}}></span>
                <span style={{ backgroundColor: '#EEE2D2'}}></span>
                <span style={{ backgroundColor: '#EEE2D2'}}></span>
            </div>
        </div>
        <ul className={`navbar-list ${sideNavClass}`}>
            {navbarMap}
        </ul>
    </div>
  )
}

export default NavbarList;