import useQuery from "./use-query";
import useMutation from "./use-mutation";

const route = "http://185.8.212.166/api";

const routes = {
  banners: `${route}/banner`,
  faq: `${route}/faq`,
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
// news
export const GetNewsCategories = (params = {}) => {
  return useQuery(routes.newsCategories, params);
};

export const GetNewsByCateg = (id, params = {}) => {
  return useQuery(`${routes.newsByCateg}/${id}`, params);
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
