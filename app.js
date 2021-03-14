const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const responseTime = require('response-time');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const middleware = require('./middleware/http-response');
const router = require('./routes/');

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Coffe API",
        description: "Swenson He coffe API",
        contact: {
          name: "Ahmed Tarik Ali"
        },
        servers: ["http://localhost:4009"]
      }
    },
    apis:['./routes/*.js']
  };
  
  

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(responseTime());

app.use(middleware.init);
app.use(middleware.logger);

//set responce 
app.use(middleware.response);

//set headre responce
app.use(middleware.responceHeader);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// use routing
app.use(router.lookups);
app.use(router.coffeeProducts);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;