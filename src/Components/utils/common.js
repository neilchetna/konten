import axios from "axios";

export const callBackendApi = async ({ method, data, params, query, url }) => {
  const res = await axios({
    method,
    data,
    query,
    params,
    url: `http://localhost:5000${url}`,
  });
  return res;
};
