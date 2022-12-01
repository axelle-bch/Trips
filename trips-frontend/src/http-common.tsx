import axios from "axios";

const baseUrl = "http://localhost:8080/api";
const token = "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY3MjQyNTM5MH0.aZHuL3CNCHJiLSOWyFLwZ0E3pR9e2-swOlytzOlmJhf3l4FU1fWnbruSH_MCO9G57xsW3ZmGzps7eHG2M7JMuw";

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
        "Authorization": token
    }
});