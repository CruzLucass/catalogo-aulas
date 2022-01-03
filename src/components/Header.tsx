import { useContext } from 'react';
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { useAuth } from '../context/auth';

export function Header() {
    const { Logout } = useAuth();

    async function handleLogout() {
        Logout();
        console.log('você esta deslogado.')
    }

    return (
        <div className="containerheader">
            <div className='logo'>
                <strong>
                    Cursos para Dev's
                </strong>
            </div>
            <div className='options'>
                <Link to={"/home"} className='link'>
                    Home
                </Link>
                <Link type="submit" to={"/cadastro"} className='link'>
                    Cadastro
                </Link>
                <Link to={"/modulos"} className='link'>
                    Modulos
                </Link>
                <Link to={"/aulas"} className='link'>
                    Aulas
                </Link>
                <Link to={"/"} className='link' onClick={handleLogout}>
                    Sair
                </Link>
            </div>
        </div>
    );
}