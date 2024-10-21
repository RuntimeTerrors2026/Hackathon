import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>If you are reading this....</p>
            <p>I am a samosa, bored in a restraunt -- I want to</p>
            <p>see the world and sit on a bike. Tap to get me out of here!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Developed by</h2>
            <ul>
                <li>Sankarshana K J</li>
                <li>Virochana</li>
                <li>Srushti Goudar</li>
                <li>Yashwith Kumar</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9340806070</li>
                <li>runtimeterrors2026@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © 2ndWife.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
