// Import the functions you need from the SDKs you need
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Create Express object
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parses application/json


// Resolve `__dirname` in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (e.g., CSS) from the project directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Handling GET request
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views','index.html')); 
}); 


// Port Number
const PORT = process.env.PORT || 80;

// Server Setup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
