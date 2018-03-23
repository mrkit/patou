const e = require('express'),
      a = e(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser');


a.use([e.static(r(__dirname, '..', 'client', 'public')), m('dev'), bp.json(), bp.urlencoded({ extended: true })]);

a.get('/', (req, res, next) => res.sendFile(__dirname, '..', 'client', 'public', 'index.html'));

a.listen(3000, console.log('made it!'))