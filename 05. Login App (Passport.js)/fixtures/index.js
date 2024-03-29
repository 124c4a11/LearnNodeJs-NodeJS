const
  User = require('../models/User'),
  mongoose = require('../libs/mongoose'),
  users = require('./users');


(async () => {
  await User.remove();

  for (let user of users) {
    const u = new User(user);
    await u.setPassword(user.password);
    await u.save();
  }

  mongoose.disconnect();
  console.log(`All done, ${users.length} users have been saved in DB`);
})();
