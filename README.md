### Sudoku Web backend (Level 1)

#### Techniques used : React, Express, Jasmine

* Prepare folder and install npm modules
    * mkdir sudoku-backend
    * cd sudoku-backend
    * npm init
        * entry point : **app.js**
        * test command : jasmine-node spec
    * npm i express --save
    * npm i request --save
    * npm i jasmine-node --save
    * npm i sudoku --save
 
* Program with app.js
    * Put codes for `GET /sudoku/board` into `app.get('/sudoku/board', ...`<br>
    * See [app.js](https://github.com/hotdeveloper/sudoku-backend/blob/master/app.js)
