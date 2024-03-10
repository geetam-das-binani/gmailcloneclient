import axios from "axios";

const API_URL = "https://gmailserver-1zch.onrender.com";
const  API_GMAIL = async (urlObject,payload,type) => {
  return await axios({
    method:urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    headers: {
      Accept: "application/json",
    },
    data: payload,
  });
};
export default API_GMAIL;