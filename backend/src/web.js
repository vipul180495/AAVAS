const express = require("express");
const connection = require('./database');
const path = require("path");
const bodyParser = require('body-parser');   // to exrtct the parameters in URL
const cors = require("cors")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

//app.use(express.static('backend'));
//app.use(express.static('src'));
//app.use(express.static('public'));
// app.use(express.static('images'));
//app.use('/images', express.static(path.join(__dirname, 'images')))
app.use("/backend/images", express.static("images"));

app.use(cors());

//app.get("/", function (req, res) {
//res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
//});

// app.get("/ClientLogin", function (req, res) {
//   console.log(req.query.email)
//   let sql = "select email from client WHERE email= '" + req.body.email + "'"
//   connection.query(sql, function(err,results){
//         if (err) throw err;
//         return res.send(results);
//   })
// });
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// app.get("/ClientLogin", function (req, res) {
//   const email = req.query.email;

//   // Validate the email format
//   // if (!validateEmail(email)) {
//   //   console.warn("Invalid email address");
//   //   return res.status(400).send("Invalid email address");
//   // }

//   // Execute a query to check if the email exists in the database
//   const sql = "SELECT * FROM client WHERE email = '" + email + "'"
//   connection.query(sql, function (err, results) {
//     if (err) throw err;

//     if (results.length === 0) {
//       console.warn("Email not found");
//       return res.status(401).send("Email not found");
//     }

//     // Email exists in the database
//     return res.send(results);
//   });
// });

app.get("/ClientLogin", function (req, res) {
  const email = req.query.email;

  // Execute a query to check if the email exists in the database
  const sql = "SELECT * FROM client WHERE email = '" + email + "'"
  connection.query(sql, function (err, results) {
    if (err) throw err;

    if (results.length === 0) {
      console.warn("Email not found");
      return res.status(401).send({ emailExists: false });
    }

    // Email exists in the database
    return res.send({ emailExists: true, results });
  });
});


// app.get("/AdminLogin", function (req, res) {
//   const sql = "SELECT * FROM admin"
//   connection.query(sql, function (err, results) {
//     if (err) throw err;
//     return res.send(results);
//   });
// });

app.post("/AdminLogin", function (req, res) {
  const { username, password } = req.body;
  const sql = `SELECT * FROM admin WHERE username = '${username}' AND password = '${password}'`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    if (results.length === 1) {
      return res.send({ success: true });
    } else {
      return res.status(401).send({ success: false, message: 'Invalid username or password' });
    }
  });
});


app.get("/AdminDashboard", function (req, res) {
  const sql = "SELECT b.branchNo, b.city, COUNT(pfr.propertyNo) AS numProperties, COUNT(e.employeeNo) AS numEmployees FROM branch b LEFT JOIN propertyforrent pfr ON b.branchNo = pfr.branchNo LEFT JOIN employee e ON b.branchNo = e.branchNo GROUP BY b.branchNo"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    return res.send(results);
  });
});


app.get("/ViewProperty", function (req, res) {
  // const sql = "SELECT * FROM property WHERE rented = 'No'"; // get only available properties
  const sql = "SELECT propertyNo, picture FROM propertyforrent"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    return res.send(results);
  });
});

app.get("/ViewProperty/:propertyNo", function (req, res) {
  const propertyNo = req.params.propertyNo;
  const sql = "SELECT propertyNo, street, city, postcode, type, rooms, rent, ownerNo, employeeNo, branchNo, picture, floorPlan, DATE_FORMAT(dateFrom, '%Y-%m-%d') AS formattedDateFrom, DATE_FORMAT(dateTo, '%Y-%m-%d') AS formattedDateTo, email FROM propertyforrent WHERE propertyNo= '" + propertyNo + "'";
  connection.query(sql, (err, results) => {
    if (err)
      throw err;
    return res.send(results[0]);
  });
});


app.get("/viewing", function (req, res) {
  // const sql = "SELECT * FROM property WHERE rented = 'No'"; // get only available properties
  const sql = "SELECT viewID, ID, propertyNo, DATE_FORMAT(viewDate, '%Y-%m-%d') AS formattedviewDate, viewHour, Comment, WishToRent FROM viewing"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    return res.send(results);
  });
});


// app.put('/viewing/:id', async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const { Comment, WishToRent } = req.body;
//     const WishToRentBoolean = WishToRent === "Yes";
//     const result = await db.collection('viewings').updateOne(
//       { ID: id },
//       { $set: { Comment, WishToRent: WishToRentBoolean } }
//     );
//     if (result.modifiedCount === 1) {
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

app.put('/viewing/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { Comment, WishToRent } = req.body;
  const WishToRentBoolean = WishToRent === "Yes" ? 1 : 0;
  const sql = `UPDATE viewing SET Comment = '${Comment}', WishToRent = '${WishToRentBoolean}' WHERE ID = '${id}'`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

// app.put('/viewing/:id', async (req, res) => {
//   try {
//     // Get the ID from the request parameters
//     const id = parseInt(req.params.id);

//     // Get the updated values of the Comment and WishToRent attributes from the request body
//     const { comment, wishToRent } = req.body;

//     // Convert the WishToRent value to a boolean
//     const wishToRentBoolean = wishToRent === "Yes";

//     // Update the viewing in the database
//     const result = await db.collection('viewings').updateOne(
//       { ID: id },
//       { $set: { Comment: comment, WishToRent: wishToRentBoolean } }
//     );

//     // If the update was successful, send a success response
//     if (result.modifiedCount === 1) {
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });


app.use('/backend/images', function (req, res, next) {
  console.log('Request to images folder:', req.url);
  next();
});


app.post("/OwnerRegister", function (req, res) {
  let sql = "INSERT INTO propertyforrent(propertyNo, street, city, postcode, type, rooms, rent, ownerNo, employeeNo, branchNo, picture, floorPlan, dateFrom, dateTo, email) VALUES ('" + req.body.propertyNo + "','" + req.body.street + "', '" + req.body.city + "', '" + req.body.Postcode + "', '" + req.body.type + "', '" + req.body.rooms + "', '" + req.body.rent + "', '" + req.body.ownerNo + "', '" + req.body.employeeNo + "', '" + req.body.branchNo + "', '" + req.body.picture + "', '" + req.body.floorPlan + "', '" + req.body.dateFrom + "', '" + req.body.dateTo + "', '" + req.body.email + "')"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  })
});

app.post("/ClientRegister", function (req, res) {
  let sql = "INSERT INTO client(ID, clientNo, fName, lName, telNo, Street, City, PostCode, email, JoinedOn, Region, preType, maxRent) VALUES ('" + req.body.ID + "','" + req.body.clientNo + "', '" + req.body.fName + "', '" + req.body.lName + "', '" + req.body.telNo + "', '" + req.body.Street + "', '" + req.body.City + "', '" + req.body.PostCode + "', '" + req.body.email + "', '" + req.body.JoinedOn + "', '" + req.body.Region + "', '" + req.body.preType + "', '" + req.body.maxRent + "')"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  })
});

app.post("/CreateBooking", function (req, res) {
  // const date = new Date(formValues.viewDate);
  // const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  let sql = "INSERT INTO viewing(viewID, ID, propertyNo, viewDate, viewHour, Comment, WishToRent) VALUES ('" + req.body.viewID + "','" + req.body.ID + "','" + req.body.propertyNo + "', '" + req.body.viewDate + "', '" + req.body.viewHour + "', '" + req.body.Comment + "', '" + req.body.WishToRent + "')"
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  })
});


app.listen(2023, function () {
  console.log("Server is running on http://localhost:2023");
  connection.connect(function (err) {
    if (err) throw err;
    console.log('Database Connection Established');
  })
});