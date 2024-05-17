// import axios from "axios"

// export const getAllDataApI = () => {
//     return axios.get("https://dummyjson.com/products")
// }

import axios from "axios"

export const getAllDataAPI = () => {
    return axios.get("https://dummyjson.com/products")
}

export const loginUserAPI = (value) => {
    return axios.get('https://dummyjson.com/auth/login', value, {
        header: {
            'Content-Type': 'application/json',

        }
    })
}