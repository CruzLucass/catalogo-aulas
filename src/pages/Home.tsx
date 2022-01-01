import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import '../styles/button.scss'
import '../styles/home.scss'
import devlogo from '../assets/images/dev-codando.jpeg'
import { Footer } from '../components/Footer'

export function Home() {

    return (
        <>
            <Header />
            <div className='container-home'>
                <div className='inscricao'>
                    <h2>Cursos de Programação Online</h2>
                    <strong>
                        Aprenda a programar e entre na área mais promissora da atualidade.
                        O curso de programação é para todos e para todos os tipos de gosto,
                        inscreva-se e saiba mais.
                    </strong>
                    <Link to={'/inscricao'} className='button'>
                        Increva-se
                    </Link>
                </div>
                <div className='imagem'>
                    <img src={devlogo} alt='Logo dev codando' />
                </div>
            </div>

            <div className='banner'>
                <h3>
                    inscreva-se e fale com um de nossos consultores
                </h3>
                <form>
                    <input
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        type='text'
                        placeholder='+55 (99) 99999-9999'
                    />
                    <input
                        type='text'
                        placeholder='mail@exemplo.com'
                    />
                    <button>
                        INSCREVA-SE
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}