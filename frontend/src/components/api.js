/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */

import userEvent from "@testing-library/user-event";
import axios from "axios";

console.log(process.env);

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://trashpandajuncie.herokuapp.com/api"
    : `http://localhost:5000/api`;
console.log(serverUrl);
const createHeaders = () => {
  return { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
};

const actions = {
  getUser: async () => {
    return await axios.get(`${serverUrl}/get-the-user`, createHeaders());
  },

  suggestions: async (post) => {
    let res = await axios.post(`${serverUrl}/suggestions`, post, createHeaders());
    return res;
  },
  getAllPosts: async (post) => {
    return await axios.get(`${serverUrl}/all-the-posts`, createHeaders());
  },

  postAllCharacters: async (characters) => {
    let res = await axios.post(`${serverUrl}/newCharacters`, characters, createHeaders());
    console.log(res);
    return res;
  },

  authenticate: async (profileObj) => {
    console.log(profileObj, "profileObj");
    let res = await axios.post(`${serverUrl}/authenticate`, profileObj, createHeaders());
    console.log(res);
    localStorage.setItem("token", res.data.token);
    return res;
  },
  //NOVELS
  newNovel: async (novel) => {
    let res = await axios.post(`${serverUrl}/novels`, novel, createHeaders());
    console.log(`Your new novel ${res} has been submitted!`);

    return res;
  },

  getUserNovels: async (novel) => {
    let res = await axios.get(`${serverUrl}/userNovels`, createHeaders());
    return res;
  },
  //NOTES
  newNote: async (note) => {
    return await axios.post(`${serverUrl}/addNote`, note, createHeaders());
  },

  getNovelPlots: async (plots) => {
    let res = await axios.get(`${serverUrl}/novelsPlots`, createHeaders());
    console.log(res, 'newNovelPlot')
    return res;
  }
};



export default actions;
