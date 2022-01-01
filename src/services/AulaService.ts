
import { IAula } from "../interfaces/IAula";
import { Api } from "../providers"

const getAll = () => Api.get<IAula[]>('/aulas');

export const AulaService = {
    getAll
};