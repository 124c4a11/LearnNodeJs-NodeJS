const emitter = require('../libs/socketEmitter');


exports.post = async (ctx, next) => {
  if (ctx.session.socketIds) {
    ctx.session.socketIds.forEach((socketId) => {
      emitter.to(socketId).emit('logout');
    });
  }

  ctx.logout();
  ctx.redirect('/');
};
