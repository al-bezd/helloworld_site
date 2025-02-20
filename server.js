const express = require("express");
const path = require("path");

const app = express();
// получаем аргументы
const args = process.argv.slice(2)
const parsedArgs = {};
// приводим аргументы в порядок
args.forEach(arg => {
    const [key, value] = arg.split("=");
    if (key.startsWith("--")) {
        parsedArgs[key.slice(2)] = value; 
    }
});


const HOST = parsedArgs.host || "0.0.0.0";
const PORT = parsedArgs.port || 3000;
const USE_SSL = parsedArgs.use_ssl || false;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Сервер запущен: ${USE_SSL?"https":"http"}://${HOST}:${PORT}`);
});
