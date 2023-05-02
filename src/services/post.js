import axiosConfig from "../axiosConfig";
import axios from "axios";

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

export const apiGetPostsLimit = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/limit`,
        params:query
        
        
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};
export const apiGetNewPost = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/new-post`,      
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export const apiUploadImages = (images) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,      
        data: images
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};