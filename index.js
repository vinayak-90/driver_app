import express from 'express';
import axios from 'axios';
import 'dotenv/config';

const app = express();

let postUrl = process.env.URL1;
let getUrl = process.env.URL2
const port = process.env.PORT;

const postData = {
  "vehicleId": "vechile101",
  "driverId": "driver1",
  "routeId": "routeid-241",
  "geoFenceDist": 0,
  "startTime": "24-05-2024 12:20"
}

const headers = {
  "Authorization": "Bearer ABCD",
  "parent": "testca4"
};

// Configuration object with headers
const config = {
  headers: headers
};

// axios.post(pUrl, postData, config).then(response => {
//   console.log(response.data); // Handle the response data
// })
//   .catch(error => {
//     console.error(error); // Handle the error
//   });

axios.get(getUrl, config)
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle the error
  });


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

