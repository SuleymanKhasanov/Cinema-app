import './ui/App.css';
import Sidebar from '../widgets/Sidebar/Sidebar';

import Home from '../pages/Home/Home';

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
