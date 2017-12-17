class Auth {
  //sets token its passed in session storage
  static authenticateToken(token) {
    sessionStorage.setItem('token', token);
  }

  //returns a boolean that represents whether or not there is a token currently stored in storage 
  static isUserAuthenticated() {
    return sessionStorage.getItem('token') !== null;
  }

  //removes the token from session storage, logging user out
  static deauthenticateToken() {
    sessionStorage.removeItem('token');
  }

  //gets token from storage so it can be used
  static getToken() {
    return sessionStorage.getItem('token');
  }
}

export default Auth;

