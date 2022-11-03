import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar' >
                <img src="preview-324.jpg" className='logoimg' alt="Logo" />
            
                   <span className='navbar-options' > <Link to=''>Home</Link></span>
                   <span className='navbar-options' > <Link to='/About'>About</Link></span>
                   <span className='navbar-options' > <Link to='/Contact'>Contact</Link></span>
               


            </div>
        )
    }
}
