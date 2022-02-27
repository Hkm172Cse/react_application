import axios from 'axios';
class RestClient{

    static getRequest(getUri){
          return  axios.get(getUri).then(response=>{
                    return response.data;
            })
            .catch(error=>{

            })
    }
}
export default RestClient;