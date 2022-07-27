import React from 'react'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <svg width="30px" height="30px">
                <linearGradient id="gradient-icon" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#00F5A0 " offset="0%" />
                    <stop stopColor="#00D9F5" offset="100%" />
                </linearGradient>
                <linearGradient id="gradient-icon-hover" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#00F5A0 " offset="0%" />
                    <stop stopColor="#00D9F5" offset="100%" />
                </linearGradient>
            </svg>
            <div className="footer">
                <div className="footer-left">
                    <div className="site-name">Muhammad Adnan</div>
                    <div className="copyright">
                        Copyright © 2022 muhammadadnanbwp@outlook.com
                    </div>
                </div>
                <div className="footer-right">
                    <div className="site-name" style={{ borderRight: "none", paddingRight: '0px' }} >Follow me</div>
                    <a href="https://www.facebook.com/adnanbwp7" className="btn-social" target="_blank">
                        <BsFacebook style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/adnanbwp/" className="btn-social" target="_blank">
                        <BsLinkedin style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                    <a href="https://twitter.com/adnanbwp7" className="btn-social" target="_blank">
                        <AiFillTwitterCircle style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                    <a href="https://www.instagram.com/adnanbwp7/" className="btn-social" target="_blank">
                        <BsGithub style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                    <a href="https://github.com/adnanbwp7" className="btn-social" target="_blank">
                        <AiFillInstagram style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                    <a href="+92 309 6814886" className="btn-social" target="_blank">
                        <RiWhatsappFill style={{ fill: "url(#gradient-icon)" }} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
