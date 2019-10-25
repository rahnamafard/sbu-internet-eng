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

## Test API

### PUT Example request (JSON)

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Asia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              126.21093749999999,
              52.3755991766591
            ],
            [
              78.57421875,
              53.4357192066942
            ],
            [
              49.39453125,
              51.6180165487737
            ],
            [
              48.33984375,
              46.195042108660154
            ],
            [
              42.71484375,
              41.77131167976407
            ],
            [
              38.67187499999999,
              39.36827914916014
            ],
            [
              33.92578125,
              29.38217507514529
            ],
            [
              43.41796875,
              13.923403897723347
            ],
            [
              69.9609375,
              9.102096738726456
            ],
            [
              101.07421875,
              7.536764322084078
            ],
            [
              128.14453125,
              19.80805412808859
            ],
            [
              142.03125,
              40.97989806962013
            ],
            [
              126.21093749999999,
              52.3755991766591
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Iran"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              44.29687499999999,
              39.095962936305476
            ],
            [
              49.04296875,
              29.53522956294847
            ],
            [
              62.22656249999999,
              24.686952411999155
            ],
            [
              60.8203125,
              35.88905007936091
            ],
            [
              55.72265625,
              37.996162679728116
            ],
            [
              50.09765625,
              39.90973623453719
            ],
            [
              44.29687499999999,
              39.095962936305476
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "India"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              76.640625,
              9.275622176792112
            ],
            [
              89.296875,
              21.12549763660628
            ],
            [
              88.41796875,
              25.3241665257384
            ],
            [
              75.05859375,
              31.80289258670676
            ],
            [
              69.60937499999999,
              25.16517336866393
            ],
            [
              76.640625,
              9.275622176792112
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Turkey"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              24.960937499999996,
              39.639537564366684
            ],
            [
              30.585937499999996,
              36.1733569352216
            ],
            [
              42.5390625,
              37.16031654673677
            ],
            [
              46.23046874999999,
              41.11246878918088
            ],
            [
              34.27734375,
              42.293564192170095
            ],
            [
              24.960937499999996,
              39.639537564366684
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Middle East"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              43.76953125,
              14.093957177836224
            ],
            [
              56.77734375,
              17.97873309555617
            ],
            [
              70.13671875,
              29.22889003019423
            ],
            [
              65.390625,
              37.43997405227057
            ],
            [
              53.61328124999999,
              39.639537564366684
            ],
            [
              36.2109375,
              36.73888412439431
            ],
            [
              33.22265625,
              29.84064389983441
            ],
            [
              43.76953125,
              14.093957177836224
            ]
          ]
        ]
      }
    }
  ]
}
```


### GET Example request

```
https://internet-eng-hw1.herokuapp.com/gis/testpoint?lat=54.755859375&long=35.67514743608467
```