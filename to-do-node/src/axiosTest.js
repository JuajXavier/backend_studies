const axios = require("axios");

const getTodos = async () => {
    try {
        const response = await axios.get("http://localhost:3000/todos");
        console.log(response.data);
    } catch (error) {
        console.log({error})
    }
}

getTodos();