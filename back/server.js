const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// DB
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB connection success !!');
});

// START SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port} ...`);
});
