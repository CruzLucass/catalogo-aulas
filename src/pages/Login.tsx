import '../styles/auth.scss'
import '../styles/button.scss'
import devto from '../assets/images/devto.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import { Button } from '../components/Button'
import { useAuth } from '../context/auth'
import { render } from '@testing-library/react'
import { Alert } from 'react-bootstrap'


function initialState() {
    return { email: '', password: '' };
}

export function Login() {
    const { Sign, signed } = useAuth();

    const [values, setValues] = useState(initialState);

    function onChange(event: any) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });

    }

    async function onSubmit(event: any) {
        event.preventDefault();

        Sign({ email: values.email, password: values.password });

        setValues(initialState);
    }

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
                        <h1>Faça login</h1>

                        <form onSubmit={onSubmit}>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={onChange}
                                value={values.email}
                            />
                            <input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                onChange={onChange}
                                value={values.password}
                            />
                            <Button type="submit" className='button'>
                                Faça login
                            </Button>

                        </form>
                    </div>
                </main>

            </div>
            <Footer />
        </>
    )
}