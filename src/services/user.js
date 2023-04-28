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
  