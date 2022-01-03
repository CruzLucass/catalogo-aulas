import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useModulo } from '../hooks/useModulos';
import '../styles/modulos.scss'


export function Modulos() {

    const { modulos, getAll } = useModulo();

    useEffect(() => {
        getAll();
    }, [getAll]);

    return (
        <>
            <Header />
            <div className='container-lista'>
                <div className='title'>
                    <h1>Confira todos os módulos do nosso curso</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modulos.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    <a href='#'>Editar</a>
                                    <a href='#'>Excluir</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <Link to={'/addmodulo'} className="button" >Adicionar Modulo</Link>
            </div>
            <Footer />
        </>
    );
}