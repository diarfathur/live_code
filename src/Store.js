import createStore from "unistore";
import axios from "axios";

// state yang akan digunakan dimasukan ke dalam variabel dulu
const initialState = {
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    listMovies: [],
    catagory:[],
    avatar: ""
};

const apiKey = 'e74dfabd2d864debb564eea6a21bd7ee';
const baseUrl = 'https://api-todofancy.herokuapp.com/api/movies'

// membuat store untuk state
export const store = createStore(initialState)

export const actions = store => ({
    //action hanya bisa me-return perubahan state
    setField: (state, event) => {
        
        return {
            [event.target.name]: event.target.value
        };
    },
    //user logout
    postLogout: state => {
        return { is_login: false };
    },
    //user login
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        }
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(response => {
                console.log("postLogin.resp", response.data);
                if (response.data.hasOwnProperty("user_data")) {
                    //menyimpan nilai state baru ke store
                    store.setState({
                        username: response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar: response.data.user_data.avatar,
                        is_login: true
                    })
                }
                console.log(response.data.user_data);
            })
            .catch(function (error) {
                console.log(error)
            });
    },

    //Halaman Blog
    getMovies: async (state) => {
        await axios
        .get(baseUrl)
        .then(function(response) {
            console.log(response)
            store.setState({listMovies: response.data.movies})
        })
        .catch(function (error) {
            console.log(error)
        })
    },
    
})

