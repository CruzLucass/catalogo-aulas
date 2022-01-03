import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAulas } from '../hooks/useAulas';


export function Aulas() {

    const { aulas, getAll } = useAulas();

    useEffect(() => {
        getAll();
    }, [getAll]);

    return (
        <>
            <Header />
            <div className='container-lista'>
                <div className='title'>
                    <h1>Confira todas as aulas do nosso curso</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DATA</th>
                            <th>MODULO</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aulas.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.data}</td>
                                <td>{item.moduloId}</td>
                                <td>
                                    <a href='#'>Editar</a>
                                    <a href='#'>Excluir</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <Link to={'/addaula'} className="button">Adicionar Aula</Link>
            </div>
            <Footer />
        </>
    );
}