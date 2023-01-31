import { useMutation } from '@tanstack/react-query';
import { FileRequest } from '../main-request';

// method: "post" | "get" | "put" | "patch" | "delete"
const useFileMutation = (method, url, options) =>
  useMutation(
    (variables) => {
      const response = FileRequest({ method, url, data: variables });
      return response;
    },
    { ...options }
  );

export default useFileMutation;
