import React from 'react';
import "./navBar.css";
import { ReactComponent as ArrowIcon } from '../Assets/Icon Chevron Down.svg';
import { ReactComponent as SearchIcon } from '../Assets/Search Icon.svg';


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
                    <ArrowIcon/>
                </span>
            </div>
            <div className='Nav_left_program'>
                Programs
                <span className='arrow'>
                    <ArrowIcon/>
                </span>
            </div>
        </div>
        <div className='Nav_right'>
            <div className='Nav_right_search'>
                <SearchIcon/>
            </div>
            <div className='Nav_right_login'>
                Log in
            </div>
            <div className='Nav_right_joinNow'>
                <button>JOIN NOW</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar