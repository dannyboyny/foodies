/*-----Server------- */
/*
  This server is simply to locally run up graphql.
  GraphQl should be used in AWS with appsync
*/

const express = require('express'),
bdParser = require('body-parser'),
  cookieSession = require('cookie-session');

  const app = express();

  //body parser middleware - settings
  app.use(
    bdParser.urlencoded({extended: false})
  );
  app.use(bdParser.json());
  
  app.use(
    cookieSession({
      maxAge: 30*24*60*60*1000,
      keys:[process.env.COOKIE_KEY]
    })
  );

  //test input
  app.get('/',(req,res)=>{
    res.send("home page")
  })

  const PORT = process.env.PORT || 8300;
  app.listen(PORT,()=>{
    console.log(`Server listen at door:${PORT}`);
  });
