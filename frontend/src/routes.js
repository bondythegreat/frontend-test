import home from './components/home'
import map from './components/map'

const routes = [
	{
		path: '/',
		name: 'home',
		component: home,
		meta: {
      		title: 'Home Page - Bali Bible Test for Bondan',
      	}
	},
	{
		path: '/map',
		name: 'map',
		component: map,
		meta: {
      		title: 'Map Page - Bali Bible Test for Bondan',
      	}
	}
];

export default routes;