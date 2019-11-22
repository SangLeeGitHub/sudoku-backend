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

* Add the API test 
    * mkdir spec
    * Put the test codes for the Sudoku rule into spec/backend.spec.js
    * Read each row and sorting array and compare the [0,1,2,3,4,5,6,7,8]
    * Read each column and sorting array and compare the [0,1,2,3,4,5,6,7,8]
    * See [spec/backend.spec.js](https://github.com/hotdeveloper/sudoku-backend/blob/master/spec/backend.spec.js)

* Test 
   * `npm run build` on the project root directory.
   
* Run
   * `node app.js`
