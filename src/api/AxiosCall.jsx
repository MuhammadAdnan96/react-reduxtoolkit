import axios from "axios";

const axiosCall = (userName, password, setError) => {
  const apiResponse = axios({
    url: "https://fakestoreapi.com/auth/login",
    method: "POST",
    data: {
      username: userName,
      password: password,
    },
  })
    .then((res) => {
      localStorage.setItem("userToken", res.data.token);
      return res.data.token;
    })
    // .catch((err) => {
    //   console.log(err.response);
    //   setError(err.response.data);
    // });
  return apiResponse;
};
export default axiosCall;
