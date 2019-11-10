import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import { MusicPlayer } from '../components/2/MusicPlayer/MusicPlayer';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    name: 'discover',
    component: MusicPlayer,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
