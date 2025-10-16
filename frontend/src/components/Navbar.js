import React from "react";
import '../styles/main.scss'

export default function Navbar(){
    return(
        <nav id="navbar">
            <div className="nav">
                <a href="/home" className="nav-item">HOME</a>
                <a href="/about" className="nav-item">ABOUT</a>
                <a href="/showcase" className="nav-item">SHOWCASE</a>
                <a href="/bookings" className="nav-item">BOOKINGS</a>
            </div>
        </nav>
    )
}