import { ILogin } from "../interfaces/ILogin";
import { Api } from "../providers"

const signIn = (body: Pick<ILogin, 'email' | 'password'>) => Api.post('/Auth/entrar', body);

export const LoginService = {
    signIn
};