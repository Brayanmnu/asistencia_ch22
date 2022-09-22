import axios from 'axios';

class MakerService {
    base_url = "https://back-congresohacedores.herokuapp.com/";


    getMakersByFiltersAndPagination = async (cantRegistros,nroPagina,nombres,apellidos,nroDoc) => {
        var optional=""
        if (nombres!=""){
            optional ="nombre="+nombres.toUpperCase()+"&"
        }
        if(apellidos!=""){
            optional +="apellido="+apellidos.toUpperCase()+"&"
        }

        if(nroDoc!=""){
            optional +="nro_doc="+nroDoc.toUpperCase()
        }

        const url = this.base_url + "makers/"+cantRegistros+"/"+nroPagina+"?"+optional
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }
    
    getQrMakerById = async (idMaker) => {
        const url = this.base_url + "maker-qr/"+idMaker;
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
    }

}
export {MakerService} ;