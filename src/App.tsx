import './style/App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Profile } from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './Components/News/News';
import { Settins } from './Components/Settings/Settings';
import { Music } from './Components/Music/Music';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import { NavbarContainer } from './Components/Navbar/NavbarContainer';
import { UsersContainer } from './Components/Users/UsersContainer';


const App: React.FC = () => {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <NavbarContainer />
        <div className='App__content'>
          <Route path='/profile'
            render={() => <Profile />
            }
          />
          <Route path='/messages'
            render={() => <DialogsContainer />}
          />
          <Route path='/users'
            render={() => <UsersContainer />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settins} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
