
import { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { Navigate } from 'react-router';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Api } from '../providers';
import '../styles/cadastro.scss';

function initialState() {
    return { nome: '' };
}
export interface NewModulo {
    nome: string;
}

export function AddModulo() {
    const [values, setValues] = useState(initialState);
    const [show, setShow] = useState(false);

    function onChange(event: any) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });

    }

    async function addModulo(NewModulo: object) {
        const response = await Api.post('/Modulos', NewModulo);
        console.log(response);
        if (response.status === 201) {
            setShow(true);
            <Navigate to="/modulos" replace={true} />
        } else {
            console.log(response.data);
        }

    }

    async function onSubmit(event: any) {
        event.preventDefault();

        addModulo({ nome: values.nome });

        setValues(initialState);
    }

    return (
        <div>
            <Header />
            <div className='formCadastro'>
                <h1>Cadastrar novo Modulo</h1>

                <form onSubmit={onSubmit}>
                    <input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        onChange={onChange}
                        value={values.nome}
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
                    <Toast.Body>Modulo cadastrado com sucesso</Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </div>
    )
}