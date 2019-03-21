require('dotenv').config();
const server = require('./api/server.js');
const PORT = process.env.PORT || 5000;

console.log(process.env.MY_LITTLE_SECRET);

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
