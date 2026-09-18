import { Router } from 'express';

const router = Router();

const resourceHandler = (resource: string) => (_request: unknown, response: { json: (body: unknown) => void }) => {
  response.json({ resource, items: [] });
};

router.get('/users/', resourceHandler('users'));
router.get('/teams/', resourceHandler('teams'));
router.get('/activities/', resourceHandler('activities'));
router.get('/leaderboard/', resourceHandler('leaderboard'));
router.get('/workouts/', resourceHandler('workouts'));

export default router;
