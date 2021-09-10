import axios from 'axios'

let api = 'https://api.interzoid.com/getcurrencyrate?license=YOURAPIKEY&symbol=EUR';

axios.get(api)
  .then(response => console.log(response.data))
