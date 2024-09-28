"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(URL).then(function (response) {
    console.log(response.data);
    var data = response.data;
    var id = data.id;
    var title = data.title;
    var completed = data.completed;
    console.log("completed", completed);
});
