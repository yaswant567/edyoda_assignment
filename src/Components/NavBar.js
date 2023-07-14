import React from 'react';
import "./navBar.css";
import { ReactComponent as Arrow } from '../Assets/Icon Chevron Down.svg';


const NavBar = () => {
  return (
    <div className='Nav'>
        <div className='Nav_left'>
            <span className='Nav_left_logo'>
                EDYODA
            </span>
            <div className='Nav_left_course'>
                Courses
                <span className='arrow'>
                    <Arrow/>
                </span>
            </div>
            <div className='Nav_left_program'>

            </div>
        </div>
        <div className='Nav_right'>
            <div className='nav_right_search'>

            </div>
            <div className='nav_right_login'>

            </div>
            <div className='nav_right_join'>

            </div>
        </div>
    </div>
  )
}

export default NavBar