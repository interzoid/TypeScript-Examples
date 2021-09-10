import axios from 'axios'

let api = 'https://api.interzoid.com/getcryptoprice?license=YOURAPIKEY&symbol=ETH';

axios.get(api)
  .then(response => console.log(response.data))
