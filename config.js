// Configuration file for Lemo's Profile
// This file should be added to .gitignore to keep sensitive data secure

const config = {
  // Firebase Configuration
  firebase: {
    apiKey: "AIzaSyA8FxTP0_ue_tnE2hF9kJzHdlC575ePo-I",
    authDomain: "lemo-profile-stories.firebaseapp.com",
    projectId: "lemo-profile-stories",
    storageBucket: "lemo-profile-stories.firebasestorage.app",
    messagingSenderId: "1039102929805",
    appId: "1:1039102929805:web:2d45c7febaecab3e37abc4"
  }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}

