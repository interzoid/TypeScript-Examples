import axios from 'axios'

let api = 'https://api.interzoid.com/getaddressmatchadvanced?license=YOURAPIKEY&address=500 main street suite 101&algorithm=narrow';

axios.get(api)
  .then(response => console.log(response.data))
