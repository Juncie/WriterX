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
  getUser: async () => await axios.get(`${serverUrl}/get-the-user`, createHeaders()),

  authenticate: async (profileObj) => {
    // console.log(profileObj, "profileObj");
    let res = await axios.post(`${serverUrl}/authenticate`, profileObj, createHeaders());
    // console.log(res);
    localStorage.setItem("token", res.data.token);
    return res;
  },

  newNovel: async (novel) => await axios.post(`${serverUrl}/novels`, novel, createHeaders()),

  getUserNovels: async (novels) => await axios.get(`${serverUrl}/userNovels`, createHeaders()),

  getOneNovel: async (novelId) => await axios.get(`${serverUrl}/novel/${novelId}`, createHeaders()),

  newChapter: async (chapter) => await axios.post(`${serverUrl}/chapter`, chapter, createHeaders()),

  getAllChapters: async () => await axios.get(`${serverUrl}/getAllChapters`, createHeaders()),

  getAllCharacters: async () => await axios.get(`${serverUrl}/getAllCharacters`, createHeaders()),


  updatechapterArticle: async (article) => await axios.post(`${serverUrl}/chapterArticle`, article, createHeaders()),

  newPlot: async (plot) => await axios.post(`${serverUrl}/plot`, plot, createHeaders()),

  getChapter: async (chapterId) => await axios.get(`${serverUrl}/chapters/${chapterId}`, createHeaders()),

  addCharacter: async (character) => await axios.post(`${serverUrl}/character`, character, createHeaders()),



  // newLocations: async (locations) => await axios.get(`${serverUrl}/locations`, createHeaders()),

};

export default actions;
