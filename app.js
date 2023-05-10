const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
}
app.post("/upload_files", upload.single("myfile"), uploadFiles);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 