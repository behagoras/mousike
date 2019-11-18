/* eslint-disable import/extensions */
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';
import FullMusicPlayer from '../components/experiments/FullMusicPlayer/FullMusicPlayer';
import Register from '../containers/Register';
import Login from '../containers/Login';
import LoginLayout from '../components/LoginLayout';
import Hamburger from '../components/experiments/HamburgerMenu/Hamburger';

const serverRoutes = (isLogged) => {
  console.log(isLogged);
  return [
    {
      path: '/',
      component: isLogged ? Discover : Login,
      exact: true,
    },
    // {
    //   path: '/login',
    //   component: Login,
    //   exact: true,
    // },
    {
      path: '/login2',
      component: LoginLayout,
      exact: true,
    },
    {
      path: '/login3',
      component: Login,
      exact: true,
    },
    // {
    //   path: '/hamburger',
    //   component: Hamburger,
    //   exact: true,
    // },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      path: '/discover',
      component: isLogged ? Discover : Login,
      exact: true,
    },
    {
      path: '/player',
      component: FullMusicPlayer,
      exact: true,
    },

    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
