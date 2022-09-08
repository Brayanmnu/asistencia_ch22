import axios from 'axios';

class RegistroService {
    base_url = "https://back-congresohacedores.herokuapp.com/";

    
    getEvento = async () => {
        const url = this.base_url + "evento/publicado"
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }

    getAllTipoDocumento = async () => {
        const url = this.base_url + "tipo-documento"
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }

    createMakerBack = async (dataCreate) => {
        const url = this.base_url + "registrar-maker"
        const res = await axios.post(url,dataCreate).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
    }
}
export {RegistroService} ;