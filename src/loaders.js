import URL from "./databaseUrl";

export const indexLoader = async () => {
    const response = await fetch(URL)
    const petters = await response.json()
    return petters
};

export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(URL + `${id}`)
    const petter = await response.json()
    return petter;
};