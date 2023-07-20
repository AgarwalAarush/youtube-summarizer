import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

createApp(App).use(router).mount("#app");

// const express = require('express')
// const bodyParser = require('body-parser')
// const { spawn } = require('child_process')

// const app = express();
// const port = 3000

// // app.use(bodyParser.urlencoded({ extended: true }))
// // app.use(bodyParser.json)

// app.post('/python-server/', (req, res) => {

//     const python = spawn('python', ['src/backend/main.py, ']);
    
//     python.stdout.on('data', function (data) {
//         dataCollected = data.toString();
//     });

//     python.stderr.on('data', data => {
//         console.error(`stderr: ${data}`)
//     });

//     python.on('exit', code => {
//         console.log(`child process exited with code ${code}, ${dataCollected}`);
//         router.push("/create")
//         // res.sendFile(`${__dirname}/src/result.html`);
//     })

// })

// var listener = app.listen(port, () => {
//     console.log(`Your app is listening on port ${listener.address().port}`);
// });