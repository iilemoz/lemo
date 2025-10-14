const config = {
  firebase: {
    apiKey: "AIzaSyA8FxTP0_ue_tnE2hF9kJzHdlC575ePo-I",
    authDomain: "lemo-profile-stories.firebaseapp.com",
    projectId: "lemo-profile-stories",
    storageBucket: "lemo-profile-stories.firebasestorage.app",
    messagingSenderId: "1039102929805",
    appId: "1:1039102929805:web:70374f5271573db537abc4"
  },
  
  // Admin Configuration
  admin: {
    password: "lemoz01204362630"
  }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}