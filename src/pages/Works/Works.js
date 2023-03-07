import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

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
