import './style/App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './Components/News/News';
import { Settins } from './Components/Settings/Settings';
import { Music } from './Components/Music/Music';
import { ActionType, StateType } from './Data/store';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import { StoreContext } from './storeContext/storeContext';
type PropsType = {
  state: StateType
  dispatch: (action: ActionType) => void
}
const App = ({ state, dispatch, ...props }: PropsType) => {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <StoreContext.Provider value={state}>
          <Navbar />
        </StoreContext.Provider>
        <div className='App__content'>
          <Route path='/profile'
            render={
              () => <Profile
                state={state.profilePageData}
                dispatch={dispatch}
              />
            }
          />
          <Route path='/messages'
            render={
              () => <DialogsContainer
                state={state.dialogsPageData}
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
