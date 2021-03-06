import { useState } from "react";
import { Alert, Toast, ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Api } from "../providers";

import '../styles/cadastro.scss';

function initialState() {
    return { email: '', password: '', confirmPassword: '' };
}
export interface NewUser {
    email: string;
    password: string;
    confirmPassword: string;
}

export function Cadastro() {
    const [values, setValues] = useState(initialState);
    const [show, setShow] = useState(false);

    function onChange(event: any) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });

    }

    async function addUser(NewUser: object) {
        const response = await Api.post('/Auth/novo-usuario', NewUser);
        console.log(response);
        if (response.status === 200) {
            setShow(true);
        } else {
            console.log(response.data);
        }

    }

    async function onSubmit(event: any) {
        event.preventDefault();

        addUser({ email: values.email, password: values.password, confirmPassword: values.confirmPassword });

        setValues(initialState);
    }

    return (
        <div>
            <Header />
            <div className='formCadastro'>
                <h1>Cadastrar novo usuário</h1>

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
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirmar senha"
                        onChange={onChange}
                        value={values.confirmPassword}
                    />
                    <Button type="submit" className='button'>
                        Cadastrar
                    </Button>

                </form>
            </div>
            <ToastContainer className="p-3" position={'top-center'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Sucesso!</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>Usuário cadastrado com sucesso</Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </div>
    )
}