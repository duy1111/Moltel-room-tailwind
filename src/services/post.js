import axiosConfig from "../axiosConfig";

export const apiGetPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/post/all",
        
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export const apiGetPostsLimit = (page) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/limit?page=${page}`
        
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};