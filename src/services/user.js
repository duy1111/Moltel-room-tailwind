import axios from '../axiosConfig'


export const apiCurrentUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/v1/user/get-current",
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };
  
  export const apiUpdateUser = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "put",
          url: "/api/v1/user/update-user",
          data:payload
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };
    export const apiGetUserLimit = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/v1/user/get-all-user",
          params:query
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };
  export const apiDeleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "delete",
          url: "/api/v1/user/delete-user",
          params:{userId}
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };
  
  