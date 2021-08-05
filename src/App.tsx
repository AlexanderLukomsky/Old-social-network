import './style/App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from './Components/News/News';
import { Settins } from './Components/Settings/Settings';
import { Music } from './Components/Music/Music';
import { StateType } from './Data/state';
type PropsType = {
  state: StateType
}
const App = (props: PropsType) => {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <Navbar />
        <div className='App__content'>
          <Route path='/profile' render={() => <Profile profilePageState={props.state.profilePageData} />} />
          <Route path='/messages' render={() => <Dialogs dialogsPageData={props.state.dialogsPageData} />} />  {/*exact - точь в точь*/}
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
