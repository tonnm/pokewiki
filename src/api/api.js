import Axios from "axios"

export const api = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const listOfTypesOfPokemons = async(url, setData) => {
    const response = await api.get(url)
    setData(response.data.results)
}

export const getListOfPokemons = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data.pokemon)
}

export const getPokemonsOfAType = async(url, setData) => {
      const urlApi =  Axios.create({
            baseURL: url
        })
    const response = await urlApi.get(url)
    setData(response.data.pokemon)
}

export const getPokemon = async(url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}
