import './style/App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './Components/News/News';
import { Settins } from './Components/Settings/Settings';
import { Music } from './Components/Music/Music';

import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import { ActionType, RootStateType } from './Data/oldStore/store';
type PropsType = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}
const App = ({ state, dispatch, ...props }: PropsType) => {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <Navbar dialogsData={state.dialogsPage.dialogsData} />
        <div className='App__content'>
          <Route path='/profile'
            render={
              () => <Profile
                state={state.profilePage}
                dispatch={dispatch}
              />
            }
          />
          <Route path='/messages'
            render={
              () => <DialogsContainer
                state={state}
                dispatch={dispatch}
              />
            } />  {/*exact - точь в точь*/}
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
