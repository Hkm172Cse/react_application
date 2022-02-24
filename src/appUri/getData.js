import axios from 'axios';

class getData{
    static getRequest(){
        axios.get('http://localhost:80000').then(response=>{
           return response.data;
        }).catch(error=>{
          return error.data;
        })
    }

}
export default getData;