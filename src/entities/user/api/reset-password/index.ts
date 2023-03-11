// import axios from "axios"

export const resetPassword = ({ login }: { login: string }): Promise<{ status: 200 }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 200 });
        }, 300);
    })

    // return axios.get()
}