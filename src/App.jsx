
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button name="NOW" condition="active" />
      <Button name="Details" />
      <Button name="Forecast" />
    </div>
  );
}

export default App;
