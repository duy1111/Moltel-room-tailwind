import axiosConfig from "../axiosConfig";

export const apiGetPrices = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/price/all",
        
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export const apiGetArea = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "get",
          url: "/api/v1/area/all",
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };

  export const apiGetProvince = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "get",
          url: "/api/v1/province/all",
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };