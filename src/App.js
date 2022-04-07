import Header from './Components/Header/Header';
import Tab from './Components/Tab/Tab';

import '../src/Styles/index.scss';

function App() {
  return (
    <div className="main">
      <div className="main_container">
        <Header />
        <Tab />
      </div>
    </div>
  );
}

export default App;
