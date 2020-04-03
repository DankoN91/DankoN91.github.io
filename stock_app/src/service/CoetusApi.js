import axios from 'axios';

const loginUser = async (username,password) => {
    await axios.post('https://coetus.herokuapp.com/api/users', {
        username:username,
        password:password
    }).then(response => {
        window.localStorage.setItem("stockAppToken",response.token);
        
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}

const registerUser = async (name,surname,username,email,password) => {
    await axios.put('https://coetus.herokuapp.com/api/users', {
        name:name,
        surname:surname,
        username:username,
        email:email,
        password:password
    })
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error)
    })
}


export { loginUser, registerUser }


