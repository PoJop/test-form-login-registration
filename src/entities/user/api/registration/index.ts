// import axios from "axios"

export const registration = ({ email, password }: { email: string, password: string }):Promise<{ status: 200 }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 200 });
        }, 300);
    })

    // return axios.get()
}