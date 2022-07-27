import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className="projects" id="contact" style={{ margin: '150px auto' }}>
                <div className="form">
                <div className="about-txt" style={{ margin: '20px 0' }}>Contact me</div>
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required className="input-fields" placeholder='name' />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required className="input-fields" placeholder="e.g example@email.com" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" required className="input-fields" placeholder="Message here" rows={7}/>
                    </div>
                    <button className="btn-gradient" style={{ width: '100%', maxWidth: "550px" }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact
