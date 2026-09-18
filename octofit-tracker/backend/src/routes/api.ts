import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const router = Router();

const resourceHandler = (model: { find: () => { lean: () => Promise<unknown[]> } }, resource: string) => async (_request: unknown, response: { json: (body: unknown) => void; status: (code: number) => { json: (body: unknown) => void } }) => {
  try {
    response.json({ resource, items: await model.find().lean() });
  } catch (error) {
    response.status(500).json({ error: `Unable to load ${resource}`, details: error });
  }
};

router.get('/users/', resourceHandler(User, 'users'));
router.get('/teams/', resourceHandler(Team, 'teams'));
router.get('/activities/', resourceHandler(Activity, 'activities'));
router.get('/leaderboard/', resourceHandler(Leaderboard, 'leaderboard'));
router.get('/workouts/', resourceHandler(Workout, 'workouts'));

export default router;
