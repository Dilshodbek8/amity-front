import useQuery from './use-query';
import useMutation from './use-mutation';

const route = process.env.REACT_APP_API_URL;

const routes = {
  banners: `${route}/banners`,
};

// USERS
export const GetBanners = (params) => {
  return useQuery(routes.banners, params);
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
