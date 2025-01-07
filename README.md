WWE Roster List

This application lets you create your own personalized WWE superstar's roster list where you could put any superstar on suspension, delete the wwe superstar and get them off the suspension.

Link to project: http://recruiters-love-seeing-live-demos.com/

Tech used: HTML, CSS, JavaScript, Express, Nodejs, MongoDB

How It's Made:

I created the application using Model View Controller(MVC) framework where each module was responsible to do its part for the successful operatio of the project. Models(Roster,User) was created in MongoDB as a singular entity in a database along with its properties. Express server was built to listen for any incoming web requests where two routes(home.js,roster.js) were created to handle any incoming requests. routes, then takes the help of controllers(homecontroller/rostercontroller) to invoke a method to either supply the data itself to view or uses the help of models to interact with the database to create a data, which then supplies the data to the views(index.ejs,login.ejs etc) to create a display for the user based on the request. middleware(auth.js) makes sure the user is logged in before displaying the homepage.

Lessons Learned:

It was a great lightbulb moment when I realized i could use a class to manipulate the display. for instance, when I click on the name of the superstar to put it on suspension, I can simply choose to apply the class to apply the strikethrough design to make it appear suspended. It was definitely a great learning experience how a simple click on the front end can manipulate the entity on a database.

Examples:

Take a look at these couple examples that I have in my own portfolio:

Palettable: https://github.com/alecortega/palettable

Twitter Battle: https://github.com/alecortega/twitter-battle

Patch Panel: https://github.com/alecortega/patch-panel
