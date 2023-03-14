import React from 'react'
import './whoami.css'

export default function WhoAmI() {
    return (
        <div className="whoami">
            <h1>Qui suis-je</h1>
            <div className="text">
                <p>Avant tout, un passionné.</p>
                <p>Passionné d'informatique, bien sûr, mais pas que ...</p>
                <p>J'aime:</p>
                <ul>
                    <li>
                        La lecture
                        <p>
                            Pouvoir me plonger dans un roman historique, un
                            ouvrage de science-fiction, de fantasy, de
                            vulgarisation scientifique est un plaisir auquel je
                            m'adonne dès que j'en ai le temps.
                        </p>
                        <p>
                            Les revues techniques spécifiques à l'apprentissage
                            d'un nouveau langage ou d'une nouvelle technologie
                            font également partie de ma bibliothèque et
                            reçoivent de plus en plus fréquemment mon attention.
                        </p>
                    </li>
                    <li>
                        Les sciences
                        <p>
                            Maths, physique, chimie, biologie, tout est bon pour
                            répondre au besoin d'acquisition de connaissances de
                            mon esprit.
                        </p>
                    </li>
                    <li>
                        La musique
                        <p>
                            En écouter ou en jouer, mes goûts sont très
                            éclectiques et vont du jazz au rock, en passant par
                            le blues, la pop, la folk et bien d'autres.
                        </p>
                    </li>
                </ul>

                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}
