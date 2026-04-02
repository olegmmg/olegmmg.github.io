// firebase-init.js — shared across submit.html and admin/index.html
// Импортируется как ES module

export const firebaseConfig = {
  apiKey:            "AIzaSyCCzyMi_QRO5kxH_KY6hwpZP5ezASC30lQ",
  authDomain:        "project-magnet-0-12-0.firebaseapp.com",
  databaseURL:       "https://project-magnet-0-12-0-default-rtdb.firebaseio.com",
  projectId:         "project-magnet-0-12-0",
  storageBucket:     "project-magnet-0-12-0.firebasestorage.app",
  messagingSenderId: "806168706834",
  appId:             "1:806168706834:web:e13093dd8940641508bdcb"
};

// Paths in Realtime DB
export const PATHS = {
  submissions: 'flashtool/submissions',
  devices:     'flashtool/devices',
  roms:        'flashtool/roms',
  recoveries:  'flashtool/recoveries',
  stock:       'flashtool/stock',
  samsung:     'flashtool/samsung',  // { roms, recoveries, stock, devices }
};
