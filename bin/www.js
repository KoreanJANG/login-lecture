"use strict";

const app = require("../app");

const PORT = 3000;  

app.listen(PORT, () => {
    console.log("서버 기동");
});  //이 구문이 서버를 띄우는 부분이다. 익스프레스를 써서 굉장히 쉽게 띄울 수 있다 