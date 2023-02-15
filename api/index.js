import useQuery from "./use-query";
import useMutation from "./use-mutation";

const route = process.env.NEXT_PUBLIC_API;

const routes = {
  banners: `${route}/banner`,
  faq: `${route}/faq`,
  programs: `${route}/program`,
  alumniYears: `${route}/alumni/get-all-years`,
  alumni: `${route}/alumni`,
  news: `${route}/news`,
  newsOne: `${route}/news/one`,
  message: `${route}/message`,
  careerOne: `${route}/career-centre/all`,
  careerCategory: `${route}/career-centre/category`,
  newsCategories: `${route}/news/categories`,
  newsByCateg: `${route}/news/by-category`,
};

// banner
export const GetBanners = (params = {}) => {
  return useQuery(routes.banners, params);
};
// faq
export const GetFaqs = (params = {}) => {
  return useQuery(routes.faq, params);
};
// alumni Years
export const GetAlumniYears = (params = {}) => {
  return useQuery(routes.alumniYears, params);
};
// get alumni
export const GetAlumni = (params = {}) => {
  return useQuery(routes.alumni, params);
};
// programs
export const GetPrograms = (params = {}) => {
  return useQuery(routes.programs, params);
};
// programs single
export const GetSingleProgram = (id, params = {}, options = {}) => {
  return useQuery(`${routes.programs}/${id}`, params, options);
};
// news
export const GetNews = (params = {}) => {
  return useQuery(routes.news, params);
};
// news categories
export const GetNewsCategories = (params = {}) => {
  return useQuery(routes.newsCategories, params);
};
//  news singl
export const GetSingleNews = (id, params = {}, options = {}) => {
  return useQuery(`${routes.newsOne}/${id}`, params, options);
};
// news by categ
export const GetNewsByCateg = (id, params = {}, options = {}) => {
  return useQuery(`${routes.newsByCateg}/${id}`, params, options);
};
//  post message
export const PostMessage = (options = {}) => {
  return useMutation("post", routes.message, options);
};
// career centre categories
export const GetCareerCategory = (params = {}) => {
  return useQuery(routes.careerCategory, params);
};
//  news singl
export const GetSingleCateg = (id, params = {}, options = {}) => {
  return useQuery(`${routes.careerOne}/${id}`, params, options);
};
// export const GetUser = (id, params = {}, options = {}) => {
//   return useQuery(`${routes.users}/${id}`, params, options);
// };

// export const PostUser = () => {
//   return useMutation('post', routes.postUser);
// };

// export const PatchUser = (id) => {
//   return useMutation('patch', `${routes.users}/${id}`);
// };

// export const DeleteUsers = () => {
//   return useMutation('delete', `${routes.users}`);
// };

// export const DeleteUser = (id) => {
//   return useMutation('delete', `${routes.users}/${id}`);
// };
export default routes;
