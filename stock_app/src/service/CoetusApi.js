import axios from 'axios';

const loginUser = async () => {
    await axios.post('https://coetus.herokuapp.com/api/users', {
        username:'',
        password:''
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error)
    })
}

const registerUser = async () => {
    await axios.put('https://coetus.herokuapp.com/api/users', {
        name:'',
        surname:'',
        username:'',
        password:'',
        email:''   
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error)
    })
}


export { loginUser, registerUser }


