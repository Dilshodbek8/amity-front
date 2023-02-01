import axios from "axios";

// const getAccessToken = () => {
//   return window.localStorage.getItem('jwt_access_token');
// };

const MainRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  // headers: {
  //   common: {
  //     Authorization: getAccessToken(),
  //   },
  // },
});
const FileRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  responseType: "blob",
  // headers: {
  //   Authorization: getAccessToken(),
  // },
});

MainRequest.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response?.status === 401) {
      console.warn(error, "401");
    }
    throw error;
  }
);

export { MainRequest, FileRequest };
