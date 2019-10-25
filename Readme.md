# Internet Engineering - Homework 1 Solution

## Steps

### 1) Up & Running with NodeJS

1. Install Windows subsystem for linux.
[WSL](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwje4LPEkLflAhVPQkEAHenFByoQFjAAegQIBBAB&url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fwindows%2Fwsl%2Finstall-win10&usg=AOvVaw19ywYQHjizP388Avpy53yk).

2. Install [nvm](https://github.com/nvm-sh/nvm)
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
    ```

3. Install node
   ```
   nvm install <node-version>
   ```

4. Create project directory: `mkdir <proj-name>`
5. Create script.js file
6. Open project directory in VS Code: `code <proj-dir>`
7. Run code: `node script.js`

> **Tip 1**: VS Code has an option to connect remotely to WSL and open Linux terminal.

> **Tip 2**: To use `esmodule` for exporting entities, you should:
> 1. Change the extension of script to `.mjs`
> 2. Run code with `node --experimental-modules script.mjs`



### 2) Express Web Framework

1. [Install Express](https://expressjs.com/en/starter/installing.html)
2. Run `npm init` in project directory
3. Express simple websever is like that:
    
    ```javascript
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    ```
    then, open `127.0.0.1:3000` in your browser.



### 3) Turf.js for geo spatial functionalities

* Install [Turf](https://turfjs.org):
    ```
    npm install @turf/turf
    ```
* Use Turf functions according to [documentations](https://turfjs.org/docs).

### 4) Upload project to Github

* Open Command Pallete in VS Code with `Ctrl+Shift+P` and type `Git: Add remote` to setup git repository remote connection. Next steps is easy :)

### 5) Deploy Project on heroku.com

1. Install the Heroku Command Line Interface (CLI):
    ```
    sudo snap install heroku --classic
    ```
    or:
    ```
    curl https://cli-assets.heroku.com/install.sh | sh
    ```
2. Follow [steps](https://devcenter.heroku.com/articles/getting-started-with-nodejs) to deploy project.

* **[Here](https://internet-eng-hw1.herokuapp.com/) is my app on heroku.**




> **Tip 1**: If you use ES6 standard, notice that you must determine `start` value in `package.json` as below:
> ```javascript
> {
>   ...
>   "scripts": {
>       "start": "node --experimental-modules app.mjs",
>       ...
>   },
>   ...
> }
> ```

### 6) Load testing by artillery.io

* Follow these [steps](https://artillery.io/docs/getting-started/) to setup `load-test.yml` file.

* results:
    ```
    All virtual users finished
    Summary report @ 22:47:28(+0330) 2019-10-25
    Scenarios launched:  600
    Scenarios completed: 600
    Requests completed:  600
    RPS sent: 4.1
    Request latency:
        min: 1498.1
        max: 116054.1
        median: 47575.9
        p95: 109276.1
        p99: 115203.5
    Scenario counts:
        0: 600 (100%)
    Codes:
        404: 600
    ```














