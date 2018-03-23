const e = require('express'),
      a = e(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser');


a.use(e.static(r(__dirname, '..', 'client', 'public')));

a.get('/', (req, res, next) => res.sendFile(__dirname, '..', 'client', 'public', 'index.html'));

a.listen(3000, console.log('made it!'))