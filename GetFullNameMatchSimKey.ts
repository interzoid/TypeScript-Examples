import axios from 'axios'

let api = 'https://api.interzoid.com/getfullnamematch?license=YOURAPIKEY&fullname=Fred Smith';

axios.get(api)
  .then(response => console.log(response.data))
