const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const pool = require('./server/db');
const axios = require('axios').default
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const PORT = process.env.PORT || 5000;
// const fetch = require("node-fetch");
require('dotenv').config();

app.use(cors());
app.use(express.json());

const server = http.createServer(app)

if (process.env.NODE_ENV === "production"){
  app.use(express.static("./src/build"))
}


// email //
const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENTID ,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

let smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken:accessToken
  },
  tls: {
    rejectUnauthorized: false
  }
});

 smtpTransport.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });

app.post("/send", function (req, res) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: `${req.body.email}`,
    subject: "Stevens Winter Cup Tee Time Confirmation",
    text: `${req.body.message}`,
  };
 
  smtpTransport.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
    smtpTransport.close();
 });

//Routes//

app.get("*", (req, res) => {
  res.sendFile(__dirname, "./src/build/index.html")
});

//add event//
app.post('/calendar', async (req, res) => {
  try {
    const { entry_date, team, time } = req.body;
    const entry = team + ' @ ' + time
    const newEvent = await pool.query(
      'UPDATE calendar SET matches = array_append(matches, $1) WHERE entry_date = $2',
      [entry, entry_date]
    );
    res.json(newEvent.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get calendar data //
// january
app.get('/calendar/january', async (req, res) => {
  try {
    const dates = await pool.query("SELECT DISTINCT * FROM calendar WHERE entry_date < '2022-02-01' ORDER BY day_of_month");
    res.json(dates.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// february
app.get('/calendar/february', async (req, res) => {
  try {
    const dates = await pool.query("SELECT DISTINCT * FROM calendar WHERE entry_date BETWEEN '2022-02-01' AND '2022-02-28' ORDER BY day_of_month");
    res.json(dates.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// march
app.get('/calendar/march', async (req, res) => {
  try {
    const dates = await pool.query("SELECT DISTINCT * FROM calendar WHERE entry_date BETWEEN '2022-03-01' AND '2022-03-31' ORDER BY day_of_month");
    res.json(dates.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// april
app.get('/calendar/april', async (req, res) => {
  try {
    const dates = await pool.query("SELECT DISTINCT * FROM calendar WHERE entry_date BETWEEN '2022-04-01' AND '2022-04-30' ORDER BY day_of_month");
    res.json(dates.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// may
app.get('/calendar/may', async (req, res) => {
  try {
    const dates = await pool.query("SELECT DISTINCT * FROM calendar WHERE entry_date BETWEEN '2022-05-01' AND '2022-05-31' ORDER BY day_of_month");
    res.json(dates.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get teams //
app.get('/teams', async (req, res) => {
  try {
    const teams = await pool.query('SELECT DISTINCT * FROM teams');
    res.json(teams.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get standings //
app.get('/standings', async (req, res) => {
  try {
    const standings = await pool.query('SELECT DISTINCT * FROM standings');
    res.json(standings.rows);
  } catch (err) {
    console.error(err.message)
  }
})

server.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});