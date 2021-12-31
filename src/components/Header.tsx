import { Outlet, Link } from 'react-router-dom'
import '../styles/header.scss'

export function Header() {
    return (
        <div className="container">
            <div className='logo'>
                <strong>
                    Cursos para Dev's
                </strong>
            </div>
            <div className='options'>
                <Link to={"/home"} className='link'>
                    Home
                </Link>
                <Link to={"/modulos"} className='link'>
                    Modulos
                </Link>
                <Link to={"/aulas"} className='link'>
                    Aulas
                </Link>
                <Link to={"/"} className='link'>
                    Sair
                </Link>
            </div>
        </div>
    );
}