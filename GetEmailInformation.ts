import axios from 'axios'

let api = 'https://api.interzoid.com/getemailinfo?license=YOURAPIKEY&email=winston.smith@maths.ox.ac.uk';

axios.get(api)
  .then(response => console.log(response.data))
