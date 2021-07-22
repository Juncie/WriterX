/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */

import axios from "axios";

console.log(process.env);

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://toro-plate.herokuapp.com/api"
    : `http://localhost:5000/api`;
console.log(serverUrl);
const createHeaders = () => {
  return { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
};

const actions = {
  getUser: async () => {
    return await axios.get(`${serverUrl}/get-the-user`, createHeaders());
  },

  addPost: async (post) => {
    let res = await axios.post(`${serverUrl}/add-post`, post, createHeaders());
    return res;
  },
  getAllPosts: async (post) => {
    return await axios.get(`${serverUrl}/all-the-posts`, createHeaders());
  },

  postAllCharacters: async (post) => {
    return await axios.post(`${serverUrl}/add-character`, createHeaders());
  },

  authenticate: async (profileObj) => {
    console.log(profileObj, "profileObj");
    let res = await axios.post(`${serverUrl}/authenticate`, profileObj, createHeaders());
    console.log(res);
    localStorage.setItem("token", res.data.token);
    return res;
  },

  newNovel: async (novel) => {
<<<<<<< HEAD
    let res = await axios.post(`${serverUrl}/novels`, novel, createHeaders()).then((res) => {
      console.log(res);
    });
=======
    console.log(novel);
    let res = await axios.post(`${serverUrl}/novels`,novel, createHeaders());
    console.log(res);
>>>>>>> a35849c6d6ab6138e5625b82eee7797e316350d9
    return res;
  },
};

export default actions;
