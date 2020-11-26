
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Artists from './containers/Music/MainPage/Artists/Artists';
import Container from './components/Container/Container';
import Albums from './containers/Music/Albums/Albums';
import Tracks from './containers/Music/Tracks/Tracks';
import Layout from './components/Layout/Layout';
import TrackHistory from './containers/Users/TrackHistory/TrackHistory';
import Login from './containers/Users/Login/Login';
import Register from './containers/Users/Register/Register';
import AddArtist from './containers/AddNewItems/AddArtist/AddArtist';
import AddAlbum from './containers/AddNewItems/AddAlbum/AddAlbum';
import AddTrack from './containers/AddNewItems/AddTrack/AddTrack';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Route exact path='/music' component={Artists} />
            <Route path='/user/login' component={Login}/>
            <Route path='/user/register/' component={Register} />
            <Route path='/addArtist' component={AddArtist}/>
            <Route path='/addAlbum' component={AddAlbum}/>
            <Route path='/addTrack' component={AddTrack}/>
            <Route exact path='/music/:artistAlbums' component={Albums} />
            <Route path='/music/:artistAlbums/:albumTracks' component={Tracks} />
            <Route path='/trackHistory' component={TrackHistory} />
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;
