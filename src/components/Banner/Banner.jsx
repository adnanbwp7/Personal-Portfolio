import React from 'react'
import Banner_Image from '../../assets/Banner.png'
import './Banner.css'
import { CgArrowLongDown } from 'react-icons/cg'
import { Link as Scroll } from 'react-scroll'

const Banner = () => {
    return (
        <>
            <div className="banner" id='banner'>
                <div className="banner-left">
                    <div className="field">
                    </div>
                    <div className="name">Muhammad Adnan</div>
                    <div className="intro">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur optio veritatis obcaecati deserunt dolores beatae magni illum nihil magnam at repudiandae asperiores ducimus hic quaerat similique, autem aspernatur culpa, harum adipisci repellat quae?
                    </div>
                    <div className="btn-gp">
                        <Scroll to='contact' spy={true} smooth={true} offset={-100} duration={500} className="btn-gradient">Contact Me</Scroll>
                        <a href="https://1drv.ms/u/s!AoECPlVfD5n4hegGvagliukjtJf_RA?e=esy1Ja" target="_blank" className="btn-gradient">Download CV</a>
                    </div>
                </div>
                <div className="banner-right">
                    <img className="image" src={Banner_Image} alt="Banner Image" srcet={Banner_Image} />
                </div>
            </div>
            <div className="arrow-down">
                <CgArrowLongDown style={{ width: '20px', height: "40px", border: '1px solid' }} />
            </div>
            <div className="about">
                <div className="about-txt">About me</div>
                <div className="about-desctiption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque maiores temporibus nobis qui, tempora officia hic dolores numquam, eaque totam repudiandae necessitatibus voluptatibus harum, dicta laboriosam. Quas, excepturi minima accusamus minus iure atque omnis amet magni in fugiat soluta totam vero, recusandae dolore, sapiente facilis beatae eaque accusantium magnam voluptas expedita labore? Ratione, nobis?
                </div>
            </div>
        </>
    )
}

export default Banner
