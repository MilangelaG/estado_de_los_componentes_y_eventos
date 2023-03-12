import './App.css';
import Login from './Login.jsx';
import Alert from './Alert.jsx';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [loged, setLoged] = useState({msg: "", color: "", success: false})
  return (
    <div className="App">
      <Alert loged={loged}/>
      <Login setLoged={setLoged}/>
    </div>
  );
}

export default App;
