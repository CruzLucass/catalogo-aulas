import { useCallback, useContext, useState } from "react"
import { ILogin } from "../interfaces/ILogin";
import { LoginService } from "../services/LoginService";

export const useLogin = () => {

    const [token, setToken] = useState();

    const sign = useCallback(async (body: Pick<ILogin, 'email' | 'password'>) => {
        const { status, data } = await LoginService.signIn(body);
        console.log(data)
        console.log(status)
        if (status !== 200) throw new Error();

        setToken(data);
    }, []);

    return {
        token,
        sign
    }
}