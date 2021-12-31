import { Header } from '../components/Header';
import '../styles/modulos.scss'

export function Modulos() {

    const modulos = [
        { id: 1, nome: "Backend" },
        { id: 2, nome: "Frontend" }
    ]

    return (
        <>
            <Header />
            <div className='container-lista'>
                <div className='title'>
                    <h1>Confira todos os módulos do nosso curso</h1>
                </div>
                <ul>
                    {modulos.map((modulos) => <li key={modulos.id}>{modulos.nome}</li>)}
                </ul>
            </div>
        </>


    );
}