import { useCallback, useState } from "react"
import { IModulo } from "../interfaces";
import { ModuloService } from "../services";

export const useModulo = () => {

    const [modulos, setModulos] = useState<IModulo[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await ModuloService.getAll();

        if (status !== 200) throw new Error();

        setModulos(data);

    }, []);

    return {
        modulos,
        getAll
    };
};