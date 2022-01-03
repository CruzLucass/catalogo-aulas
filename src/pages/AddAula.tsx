
import { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useModulo } from '../hooks/useModulos';
import { Api } from '../providers';
import '../styles/cadastro.scss';

function initialState() {
    return { nome: '', data: Date(), moduloId: 0 };
}
export interface NewAula {
    nome: string;
    data: Date;
    moduloId: number;
}

export function AddAula() {
    const [values, setValues] = useState(initialState);
    const [show, setShow] = useState(false);
    const { modulos, getAll } = useModulo();

    useEffect(() => {
        getAll();
    }, [getAll]);

    function onChange(event: any) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });

    }

    async function addAula(NewAula: object) {
        const response = await Api.post('/Aulas', NewAula);
        console.log(response.data);

        if (response.status === 201) {
            setShow(true);
            <Navigate to="/aulas" replace={true} />
        } else {
            console.log(response.data);
        }

    }

    async function onSubmit(event: any) {
        event.preventDefault();
        console.log(values);
        addAula({ nome: values.nome, data: values.data, moduloId: values.moduloId });

        setValues(initialState);
    }

    return (
        <div>
            <Header />
            <div className='formCadastro'>
                <h1>Cadastrar nova Aula</h1>

                <form onSubmit={onSubmit}>
                    <input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        onChange={onChange}
                        value={values.nome}
                    />
                    <input
                        name='data'
                        type='text'
                        placeholder='yyyy/MM/dd'
                        onChange={onChange}
                        value={values.data}
                    />

                    <select>
                        {modulos.map((item, index) => (
                            <option key={index} value={values.moduloId = item.id}>
                                {item.nome}
                            </option>
                        ))}
                    </select>
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
                    <Toast.Body>Aula cadastrada com sucesso</Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </div>
    )
}