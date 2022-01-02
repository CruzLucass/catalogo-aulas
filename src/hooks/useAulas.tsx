import { useCallback, useState } from "react"
import { IAula } from "../interfaces/IAula";
import { AulaService } from "../services/AulaService";

export const useAulas = () => {

    const [aulas, setAulas] = useState<IAula[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await AulaService.getAll();

        if (status !== 200) throw new Error();

        setAulas(data);

    }, []);

    return {
        aulas,
        getAll
    };
};