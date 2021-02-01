import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points/', pointsController.index);


// index (listagem), show (único registro), create, update, delete 

export default routes;