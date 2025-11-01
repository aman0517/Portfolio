import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Logo.css'

const Logo = ({ className }) => {
    return (
        <div className={`logo ${className}`}>
        <h1>AmaN</h1>
        <img src={theme_pattern} alt="logo"/>
        </div>
    )
}

export default Logo
