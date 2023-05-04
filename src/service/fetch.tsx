import axios from "axios"
import { token } from "./config"
import { adaptStores } from "./adapters"


const URL = 'https://wanted-gruesome-smile.strapiapp.com/api/provider-store-fronts/1?populate=deep,3'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}


const getStores = async () => {
    let payload =  await axios.get(URL);
    const data = adaptStores(payload.data);
    return data;
}

const getProviders = () => {

}

export {
    getStores,
    getProviders,
}
