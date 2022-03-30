 module.exports = {
  load : function (req, res, next) {
    console.log("loging.....................");
    next();
    
  },

 Auth : function (req, res, next) {
    console.log("Authentication..");
    next();
    
  }
};