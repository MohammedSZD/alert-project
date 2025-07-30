import './App.css';
import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { CheckCircle, X } from 'lucide-react';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Alert Component Demo</h1>
      <button onClick={handleClick}>Show Alert</button>

      {showAlert && (
        <>
          <Alert
            type="success"
            title="Success!"
            description="Everything went fine ✅"
            icon={<CheckCircle size={20} />}
            onClose={() => setShowAlert(false)}
          />

          <Alert
            type="error"
            title="Error!"
            description="Something went wrong ❌"
            icon={<X size={20} />}
            onClose={() => setShowAlert(false)}
          />

          <Alert
            type="warning"
            title="warning!"
            description="Please be careful with this action ⚠️"
            icon={<X size={20} />}
            onClose={() => setShowAlert(false)}
          />

           <Alert
            type="info"
            title="info!"
            description="Here is some additional information ℹ️"
            icon={<X size={20} />}
            onClose={() => setShowAlert(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
