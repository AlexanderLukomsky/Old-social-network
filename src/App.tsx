import './style/App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Content } from './Components/Profile/Profile';

const App = () => {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
export default App;
