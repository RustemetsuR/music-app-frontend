
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Artists from './containers/MainPage/Artists/Artists';
import Container from './components/Container/Container';
import Albums from './containers/Albums/Albums';
import Tracks from './containers/Tracks/Tracks';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Route exact path='/' component={Artists} />
            <Route exact path='/:artistAlbums' component={Albums} />
            <Route path='/:artistAlbums/:albumTracks' component={Tracks} />
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;
