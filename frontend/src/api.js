/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */

import axios from 'axios'

console.log(process.env)

const serverUrl = process.env.NODE_ENV === 'production' ? 'https://toro-plate.herokuapp.com/api' : `http://localhost:5000/api`
console.log(serverUrl)
const createHeaders = () => {
    return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
}


const actions = {

    getUser: async () => {
        return await axios.get(`${serverUrl}/get-the-user`, createHeaders())
    },

    addPost: async (post) => {
        let res = await axios.post(`${serverUrl}/add-post`, post, createHeaders())
        return res
    },
    getAllPosts: async (post) => {
        return await axios.get(`${serverUrl}/all-the-posts`, createHeaders())
    },

    authenticate: async (profileObj) => {
        console.log(profileObj, 'profileObj')
        let res = await axios.post(`${serverUrl}/authenticate`, profileObj, createHeaders())
        console.log(res)
        localStorage.setItem('token', res.data.token)

        return res
    }
}

export default actions