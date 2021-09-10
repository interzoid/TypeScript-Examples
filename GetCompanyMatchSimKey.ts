import axios from 'axios'

let api = 'https://api.interzoid.com/getcompanymatchadvanced?license=YOURAPIKEY&company=ibm&algorithm=wide';

axios.get(api)
  .then(response => console.log(response.data))
