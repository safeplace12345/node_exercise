## Available Scripts
In order to run the project in Dev mode , you can run:

On the root directory run `npm start` then , Open new terminal under root directory and run `cd client && npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Run Tests

In order to run unit tests just run `npm test`
Launches the test runner in the interactive watch mode


> Messages and Users App.

    We will not provide the exact fields of the User model. You can identify them from the seed.xlsx . For Message model the fields are:

    id, content, sender, receiver, seen, timestampSent

    It is up to you, if you are gonna add more than those implied from the excel or assignment description, in order to solve a requirement.

    

    ·         Using sequelize (postgre configuration), connect with Database.

    ·         Create an API endpoint that when receives a POST request to the “/feedDB” route, it feeds the database with data. Under the hood your endpoint reads the seed.odt file and imports the data to the database.

    ·         Create an API endpoint in order to serve the retrieval of users based on a set of parameters.

    ·         Create an API endpoint (or use the existing one) that receives the user-ids of two users and retrieves all of the messages that they have exchanged, ordered by the most recent sent.

    ·         Create an API endpoint that receives a user-id and then retrieves a list of users, sorted by the most recent message that has been exchanged between the user requested and the rest of the users (just like your social-media applications). In this requirement you might need to give us some instructions on how to run it.

    ·         Use React and Redux to demonstrate the above messaging and user (retrieving messages exchanged between two users) functionality.

    ·         User interface layout and styling is required, where you can use any CSS framework, library or use your own CSS.

    

    In case you have made any assumptions, or we need any further instruction in order to make an endpoint work, please consider writing them to the Readme.md file