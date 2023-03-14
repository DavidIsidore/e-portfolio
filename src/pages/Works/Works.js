import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import booki from '../../assets/Booki.png'
import food from '../../assets/ohmyfood.png'
import kasa from '../../assets/kasa.svg'

export default function Works() {
    return (
        <div>
            <Header />
            <div>
                <h1>Mes réalisations</h1>
                <h2>Dans le cadre de ma formation de Développeur Web</h2>

                <div>
                    <Link
                        to="https://davidisidore.github.io/Livrables-P2/"
                        target="_blank"
                    >
                        <img src={booki} alt="logo Booki" />
                        Booki
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Projet3/"
                        target="_blank"
                    >
                        <img src={food} alt="logo OhMyFood" />
                        OhMyFood
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Kasa/"
                        target="_blank"
                    >
                        <img src={kasa} alt="logo Kasa" /> Kasa
                    </Link>
                </div>
            </div>
            <div>
                <h2>Autres travaux</h2>
                <div>
                    <Link to="https://caroline-gayral.com/" target="_blank">
                        caroline-gayral.com
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
