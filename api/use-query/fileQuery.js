import { useQuery } from '@tanstack/react-query';
import { FileRequest } from '../main-request';

const useFileApi = (url, params, options) => {
  return useQuery([url, params], async () => FileRequest.get(url, { params }), {
    ...options,
  });
};

export default useFileApi;
