import { useEffect } from "react";
import { Column } from "../components/Column";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List";
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
                <Column>
                    <List items={aulas} />
                </Column>
            </div>
            <Footer />
        </>
    );
}