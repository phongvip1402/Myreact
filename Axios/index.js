import 'regenerator-runtime/runtime';
import axios from 'axios';

async function getFunc(){
try {
    const res = await axios.get("https://6336eb3765d1e8ef2676188d.mockapi.io/class");
    console.log(res.data);
} catch (error) {
    console.log(`Error ${error}`)
}
}