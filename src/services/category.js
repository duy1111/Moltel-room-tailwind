import axiosConfig from "../axiosConfig";

export const apiGetCategories = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/category/all",
        
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};