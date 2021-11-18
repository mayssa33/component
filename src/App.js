import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Adresse/>
    </div>
  );
}

export default App;
