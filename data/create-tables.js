const client = require('../lib/client');
const { getEmoji } = require('../lib/emoji.js');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    await client.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL,
                    location VARCHAR(256) NOT NULL
                );           
                CREATE TABLE wishlist (
                    id SERIAL PRIMARY KEY,
                    englishName VARCHAR(256) NOT NULL,
                    isPlanet BOOLEAN NOT NULL,
                    gravity DECIMAL NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
                );
                CREATE TABLE journals (
                    id SERIAL PRIMARY KEY,
                    journal_entry VARCHAR(512) NOT NULL,
                    date VARCHAR(256) NOT NULL,
                    image_url VARCHAR(512) NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
                );
        `);

    console.log('create tables complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}