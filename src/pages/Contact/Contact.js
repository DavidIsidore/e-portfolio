import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import linked from '../../assets/linkedin.svg'
import './contact.css'

export default function Contact() {
    return (
        <div>
            <Header />
            <div>
                <h1>Pour me contacter:</h1>
                <ul className="contact_list">
                    <li>Par mail: isidoredavid@gmail.com</li>
                    <li>Par téléphone : 06.79.85.25.16</li>
                    <li>
                        Sur LinkedIn :
                        <img
                            src={linked}
                            alt="logo LinkedIn"
                            className="linked"
                        />
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
