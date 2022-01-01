import '../styles/auth.scss'
import '../styles/button.scss'
import devto from '../assets/images/devto.svg'
import { Outlet, Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function Login() {

    return (
        <>
            <div id="page-auth">
                <aside>
                    <img src={devto} alt="logo da aplicação" />
                    <strong>Cursos para Dev's</strong>
                    <p>Aprenda a programar com nossos cursos</p>
                </aside>
                <main>
                    <div className='main-content'>
                        <h1>Entre e saiba mais</h1>
                        <form>
                            <input
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                            />
                            <Link type="submit" to={"/home"} className='button'>
                                Faça login
                            </Link>
                            <Link type="submit" to={"/cadastro"} className='cadastro'>
                                Cadastre-se
                            </Link>
                        </form>
                        <Outlet />
                    </div>
                </main>

            </div>
            <Footer />
        </>
    )
}