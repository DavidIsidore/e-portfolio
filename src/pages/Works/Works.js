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
                <h1>Mes projets développés</h1>
                <div>
                    <Link to="https://davidisidore.github.io/Livrables-P2/">
                        Booki
                    </Link>

                    <Link to="https://davidisidore.github.io/Projet3/">
                        OhMyFood
                    </Link>

                    <Link to="https://davidisidore.github.io/Kasa/">Kasa</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
