import axios from "axios";

export const instance = axios.create({
    baseURL: "https://europe-west2-bitbama.cloudfunctions.net/users/"
});