
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Artists from './containers/Music/MainPage/Artists/Artists';
import Container from './components/Container/Container';
import Albums from './containers/Music/Albums/Albums';
import Tracks from './containers/Music/Tracks/Tracks';
import Layout from './components/Layout/Layout';
import TrackHistory from './containers/Users/TrackHistory/TrackHistory';
import Login from './containers/Users/Login/Login';
import Register from './containers/Users/Register/Register';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Redirect from='/' to='/music'/>
            <Route path='/user/login' component={Login}/>
            <Route path='/user/register/' component={Register} />
            <Route exact path='/music/:artistAlbums' component={Albums} />
            <Route path='/music/:artistAlbums/:albumTracks' component={Tracks} />
            <Route path='/trackHistory' component={TrackHistory} />
            <Route exact path='/music' component={Artists} />
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;
