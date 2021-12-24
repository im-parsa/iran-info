# Iran-Info
Get information about cities and provinces of Iran

<br />

## ⚙ Installation
`npm install iran-info`

<br />

## 📜 Usage
```js
const { Cities, Provinces } = require('iran-info');


// Cities

// @Get all cities of the Iran
new Cities().list();

// @Find cities with their names
new Cities().find("شیراز");

// @Search with keyword in all cities of the Iran
new Cities().search("ش");


// Provinces

// @Get all provinces of the Iran
new Provinces().list();

// @Find provinces with their names
new Provinces().find("فارس");

// @Search with keyword in all provinces of the Iran
new Provinces().search("ف");
```

<br />

## ✨ Features
- Get all cities of the Iran
- Get all provinces of the Iran
- Find cities with their names
- Find provinces with their names
- Search with keyword in all cities of the Iran
- Search with keyword in all provinces of the Iran

<br />

### 🚩 Credits
- We use [list-of-cities-in-Iran](https://github.com/sajaddp/list-of-cities-in-Iran) for our data.

<br />

### [MIT License](https://github.com/im-parsa/iran-info/blob/main/LICENSE)
