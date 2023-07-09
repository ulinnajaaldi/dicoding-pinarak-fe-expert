import Home from '../view/pages/home';
import Favorite from '../view/pages/favorite';
import DetailsResto from '../view/pages/details-resto';

const routes = {
  '/': Home,
  '/details/:id': DetailsResto,
  '/favorite': Favorite,
};

export default routes;
