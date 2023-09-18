const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port,() =>
	console.log("Wpisz w przegladarce adres IP z portem 3000"),
);
