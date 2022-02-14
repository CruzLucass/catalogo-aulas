import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Api } from "../providers";

function initialState() {
    return { nome: '' };
}
export interface NewModulo {
    nome: string;
}

export function EditaModulo() {
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

    function onSubmit(event: any) {
        event.preventDefault();

        addModulo({ nome: values.nome });

        setValues(initialState);
    }

    return (
        <div>
            <Header />
            <div className='formCadastro'>
                <h1>Editar Modulo</h1>

                <form onSubmit={onSubmit}>
                    <input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        onChange={onChange}
                        value={values.nome}
                    />
                    <Button type="submit" className='button'>
                        Salvar
                    </Button>

                </form>
            </div>
            <Footer />
        </div>
    );
}