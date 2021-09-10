import axios from 'axios'

let api = 'https://api.interzoid.com/getglobalnumberinfo?license=YOURAPIKEY&intlnumber=+4906979550';

axios.get(api)
  .then(response => console.log(response.data))
