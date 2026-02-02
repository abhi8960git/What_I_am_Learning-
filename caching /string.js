const client = require("./client");

async function init(params) {
    const result = await client.xadd("user:1");
    console.log("result", result);
}

init();

