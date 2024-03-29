const
  pug = require('pug'),
  path = require('path'),
  config = require('config');


exports.init = (app) => app.use(async (ctx, next) => {
  // in the future we'll extend this
  ctx.render = function(templatePath, locals) {
    return pug.renderFile(
      path.join(config.get('templatesRoot'), templatePath),
      locals
    );
  };

  await next();
});
