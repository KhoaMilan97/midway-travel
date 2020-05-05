import axios from "axios";

let urlApi = "http://midway-travel.com/server";

export default axios.create({
  baseURL: `${urlApi}/public/api/`,
});
