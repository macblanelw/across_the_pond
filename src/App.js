import './App.css';
import Header from './Header';
import Content from './Content';

function App() {

  return (
    <div className='App text-center'>
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Header className='container-fluid' id="header" />
        <Content className='container-fluid' id="main" />
      </div>
    </div>
    );
}

export default App;
