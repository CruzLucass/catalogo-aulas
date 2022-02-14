import { useEffect, useState } from 'react';
import { Button, Modal, Table, Toast, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useModulo } from '../hooks/useModulos';
import { Api } from '../providers';
import '../styles/modulos.scss'


export function Modulos() {

    const { modulos, getAll } = useModulo();
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [idDelete, setIdDelete] = useState(0);

    useEffect(() => {
        getAll();
    }, [getAll]);

    function handleDeleteModulo(id: number) {
        setShow(true);
        setIdDelete(id);
    }

    function handleClose() {
        setShow(false);
    }

    async function deleteModulo() {
        const response = await Api.delete('/Modulos/' + idDelete)

        if (response.status === 204) {
            setShowToast(true);
            getAll();
        }
        setShow(false);
    }

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
                                    <Link className="btn btn-warning" to={"/editamodulo/:" + item.id}>Editar</Link>
                                    <a className="btn btn-warning" onClick={() => handleDeleteModulo(item.id)} >Excluir</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <Link to={'/addmodulo'} className="button" >Adicionar Modulo</Link>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Excluir Aula</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Você tem certeza que deseja excluir esta aula?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Não
                    </Button>
                    <Button variant="primary" onClick={() => { deleteModulo() }}>Tenho certeza</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer className="p-3" position={'top-center'}>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Sucesso!</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>Modulo excluido com sucesso</Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </>
    );
}