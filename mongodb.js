// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";


MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //   name: "Eli",
    //   age: 24,
    // }, (error, result) => {
    //   if (error) {
    //     return console.log("Unable to insert user")
    //   }

    //   console.log(result.ops)
    // });

    db.collection("users").insertMany(
      [
        {
          name: "Shane",
          age: 28,
        },
        {
          name: "Lydia",
          age: 26,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert users.");
        }

        console.log(result.ops);
      }
    );
  }
);
