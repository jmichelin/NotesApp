

var isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

  var isAuth = function () {
    console.log('localStorage',$window.localStorage.getItem('com.notes-app'));
    return !!$window.localStorage.getItem('com.notes-app');
  };

exports.checkUser = function(req, res, next){
  console.log('CHECK USER REQ: ', req);
  if (!isAuth()) {
    res.redirect('/signin');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });

};
