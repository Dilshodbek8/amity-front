import useQuery from "./use-query";
import useMutation from "./use-mutation";

const route = process.env.NEXT_PUBLIC_API;

const routes = {
  banners: `${route}/banner`,
  faq: `${route}/faq`,
  programs: `${route}/program`,
  news: `${route}/news`,
  newsOne: `${route}/news/one`,
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
// faq
export const GetPrograms = (params = {}) => {
  return useQuery(routes.programs, params);
};
// news
export const GetNews = (params = {}) => {
  return useQuery(routes.news, params);
};
// programs
export const GetNewsCategories = (params = {}) => {
  return useQuery(routes.newsCategories, params);
};
export const GetSingleProgram = (id, params = {}, options = {}) => {
  return useQuery(`${routes.programs}/${id}`, params, options);
};

export const GetSingleNews = (id, params = {}, options = {}) => {
  return useQuery(`${routes.newsOne}/${id}`, params, options);
};
export const GetNewsByCateg = (id, params = {}, options = {}) => {
  return useQuery(`${routes.newsByCateg}/${id}`, params, options);
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
