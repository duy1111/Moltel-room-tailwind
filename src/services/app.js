import axiosConfig from "../axiosConfig";
import axios from "axios";
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

  export const apiGetPublicProvince = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "get",
          url: "https://vapi.vnappmob.com/api/province/",
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };

  export const apiGetPublicDistrict = (provinceId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "get",
          url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };