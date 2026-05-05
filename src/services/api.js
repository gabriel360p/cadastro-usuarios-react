import axios from   "axios"

//configurando meu cabeçalho de requisição

const apiAxios = axios.create({
    baseURL:"http://localhost:3000"
})

export default apiAxios