// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'; // Importe getDatabase

const firebaseConfig = {
  apiKey: 'AIzaSyDhCoafqZ3tiz8omlQcMYDlmWnQusRGP24',
  authDomain: 'primeiro-projeto-react-80680.firebaseapp.com',
  databaseURL:
    'https://primeiro-projeto-react-80680-default-rtdb.firebaseio.com',
  projectId: 'primeiro-projeto-react-80680',
  storageBucket: 'primeiro-projeto-react-80680.appspot.com',
  messagingSenderId: '810874720931',
  appId: '1:810874720931:web:38ba118f43037738ea6516',
  measurementId: 'G-4SGH9EHQ3Y',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Obtenha a referência ao banco de dados

export { firebaseConfig, analytics, db }; // Exporte db
