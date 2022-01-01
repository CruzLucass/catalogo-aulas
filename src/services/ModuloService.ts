
import { IModulo } from "../interfaces";
import { Api } from "../providers"

const getAll = () => Api.get<IModulo[]>('/Modulos');

export const ModuloService = {
    getAll
};