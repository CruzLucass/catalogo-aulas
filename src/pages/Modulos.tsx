import { useEffect } from 'react';
import { Column } from '../components/Column';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { List } from '../components/List';
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
                <Column>
                    <List items={modulos} />
                </Column>
            </div>
            <Footer />
        </>
    );
}