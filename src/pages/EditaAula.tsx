import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { Button } from "../components/Button";
import { Navigate } from "react-router-dom";
import { Api } from "../providers";
import { useEffect, useState } from "react";
import { useModulo } from "../hooks/useModulos";

function initialState() {
    return { nome: '', data: Date(), moduloId: 0 };
}

export function EditaAula() {
    const [values, setValues] = useState(initialState);
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


    async function editarAula(NewAula: object) {
        const response = await Api.post('/Aulas', NewAula);
        console.log(response.data);

        if (response.status === 201) {
            // setShow(true);
            <Navigate to="/aulas" replace={true} />
        } else {
            console.log(response.data);
        }
    }

    function onSubmit(event: any) {
        event.preventDefault();
        console.log(values);
        editarAula({ nome: values.nome, data: values.data, moduloId: values.moduloId });

        setValues(initialState);
    }

    return (
        <div>
            <Header />
            <div className='formCadastro'>
                <h1>Editar Aula</h1>

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
                        Salvar
                    </Button>

                </form>
            </div>
            <Footer />
        </div>
    );
}