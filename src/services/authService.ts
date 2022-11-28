import { AuthData } from "../context/Auth";

async function signIn(email: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456') {
                resolve({
                    token: 'fake-token',
                    email: email,
                    name: 'Marcos Gomes'
                })
            } else {
                reject(new Error('credenciais inválidas'))
            }
        }, 500);
    })
}

export const authService = {
    signIn
}