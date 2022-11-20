const db = require('../config/connection');
const { Post } = require('../models');
const msgSeed = require('./msgSeed.json');

db.once('open', async () => {
  await Post.deleteMany({});
  await Post.create(msgSeed);

  console.log('Seeds have been planted');
  process.exit(0);
});
