# CS465 Full Stack Development I

![image](https://github.com/user-attachments/assets/6adc95ec-937b-4ff9-93cd-22bc8e72f5df)


## Architecture

### Front-End: 
  Single Page Application using Angular and TypeScript for responsive rerendering and efficient resource use.

### Back-End: 
  MongoDb served by a NodeJS and ExpressJS back-end. MongoDb is a NoSql database that is effectively a system of JSON Objects instead of a typical database. This is typical with modern applications as it is very simple relatively to work with since JSON is so closely        related to JavaScipt.


## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
  JSON stands for JavaScript Object Notation. It is simply a data structure that is used within the front-end, back-end and the database to hold and move data. 
  JavaScript is a programming language that uses JSON to move data and perform what we tell it to.
  Since NoSQL databases are basically just JSON Objects holding other JSON Objects as collections and data rows, we use JSON practically everywhere in our application.
### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  One instance of refactoring was when I pulled out the text data from the html files and made it programatically build the travel cards. This made the code much simpler and less repetitive.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
  A full stack applciation must handle the back-end RESTful API that uses HTTP methods(GET, POST, PUT, DELETE, etc.), an endpoint(path or route), and security measures(CORS, Tokens, Authentication, Encryption) to provide a front-end with the resourcecs and data storage capabilities it needs. To test this system, we must test each endpoint for its desired functionality with a tool like Postman and by manually testing it through the front-end.


## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
  This was a good introduction to Angular as I have not used it before this. I think this course also helped me solidify my foundational understanding of the MVC layout. I am also confident in my foundation in Express, Node, TypeScript, NoSql, routing, and APIs.

