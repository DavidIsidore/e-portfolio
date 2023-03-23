import React from 'react'
//import logo from '../../logo.svg'
import photo from '../../assets/Photo2.png'
import './header.css'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div className="header">
            <div className="bandeau">
                <h1>David ISIDORE</h1>
                <h2>Développeur Front-End Junior</h2>
            </div>
            <Navbar />
        </div>
    )
}
