import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RepositoryStarsController from './app/controllers/RepositoryStarsController';
import RepositoryController from './app/controllers/RepositoryController';
import FollowingController from './app/controllers/FollowingController';
import FollowerController from './app/controllers/FollowerController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);

routes.get('/stars', RepositoryStarsController.index);

routes.get('/repositories', RepositoryController.index);
routes.post('/repositories', RepositoryController.store);
routes.put('/repositories/:id', RepositoryController.update);

routes.get('/following', FollowingController.index);
routes.post('/following', FollowingController.store);

routes.get('/followers', FollowerController.index);
routes.post('/followers', FollowerController.store);

export default routes;
