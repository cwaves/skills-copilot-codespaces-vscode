//create web server
const express = require('express');
const app = express();
const PORT = 3000;

//create a list of comments
const comments = [
    {bobby: "This is a comment"}]