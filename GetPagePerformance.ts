import axios from 'axios'

let api = 'https://api.interzoid.com/globalpageload?license=YOURAPIKEY&origin=Singapore&url=http://www.yahoo.com';

axios.get(api)
  .then(response => console.log(response.data))
