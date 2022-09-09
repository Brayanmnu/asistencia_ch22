import axios from 'axios';

class AsistenciaService {
    base_url = "https://back-congresohacedores.herokuapp.com/";

    getAsistenciaByMaker = async (idMakerEvento) => {
        const url = this.base_url + "asistencia/maker-evento/"+idMakerEvento
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }

    getAllPonencias = async () => {
        const url = this.base_url + "ponencia/minus-register"
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }
    
    registrarAsistencia = async (bodyAsistencia) => {
        const url = this.base_url + "asistencia/registrar"
        const res = await axios.post(url,bodyAsistencia).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }

}
export {AsistenciaService} ;