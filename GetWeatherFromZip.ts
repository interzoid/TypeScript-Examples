import axios from 'axios'

let api = 'https://api.interzoid.com/getweatherzipcode?license=YOURAPIKEY&zip=94111';

axios.get(api)
  .then(response => console.log(response.data))
