// Register this client with the master server

import os from "os";

import axios from "axios";

const host = `localhost:8080`
const url = `http://${host}`;

axios.post(`${url}/register`, {
  hostname: os.hostname()
}).then(res => {
  console.log(`Registered with host: ${url}/regster`);
  console.log(`Connectable at ${os.hostname()}.${host}`);
}, err => { throw err });
