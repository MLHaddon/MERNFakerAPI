const express = require("express");
const cors = require("cors");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

class User {
  constructor() {
    this.id = Math.round(Math.random() * 100);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = Math.round(Math.random() * 100);
    this.name = faker.company.companyName();
    this.address = {
      "Street": faker.address.streetName(),
      "City": faker.address.city(),
      "State": faker.address.state(),
      "ZipCode": faker.address.zipCode(),
      "Country": faker.address.country()
    }
  }
}

console.log(new User());
console.log(new Company());

app.get("/", (req, res) => {
  res.json("Hello World.");
});

app.get("/api/users/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
})

app.get("/api/company/user", (req, res) => {
  let joinedRes = {
    "User": new User(),
    "Company": new Company()
  }
  res.json(joinedRes);
})

app.listen(port, () => {
  console.log(`Connected at port: ${port}`);
})