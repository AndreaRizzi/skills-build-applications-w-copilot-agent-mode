import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/** Seed the octofit_db database with test data. */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'alexfit', email: 'alex@example.com', displayName: 'Alex Morgan', profile: { age: 29, fitnessLevel: 'intermediate' } },
      { username: 'jamieactive', email: 'jamie@example.com', displayName: 'Jamie Lee', profile: { age: 34, fitnessLevel: 'beginner' } },
      { username: 'rileystrong', email: 'riley@example.com', displayName: 'Riley Chen', profile: { age: 27, fitnessLevel: 'advanced' } },
    ]);

    await Team.create([
      { name: 'Morning Movers', description: 'A friendly team for consistent early workouts.', members: [users[0]._id, users[1]._id] },
      { name: 'Peak Performers', description: 'Training together for stronger personal bests.', members: [users[2]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Run', durationMinutes: 32, calories: 340, completedAt: new Date('2026-09-15') },
      { user: users[1]._id, type: 'Yoga', durationMinutes: 45, calories: 180, completedAt: new Date('2026-09-16') },
      { user: users[2]._id, type: 'Strength', durationMinutes: 55, calories: 420, completedAt: new Date('2026-09-17') },
    ]);

    await Leaderboard.create([
      { user: users[2]._id, points: 1280, rank: 1, period: 'weekly' },
      { user: users[0]._id, points: 1040, rank: 2, period: 'weekly' },
      { user: users[1]._id, points: 760, rank: 3, period: 'weekly' },
    ]);

    await Workout.create([
      { title: 'Balanced Starter', description: 'A practical full-body session for building consistency.', difficulty: 'beginner', durationMinutes: 25, exercises: ['Bodyweight squats', 'Incline push-ups', 'Dead bug'] },
      { title: 'Tempo Builder', description: 'A steady cardio and strength circuit for intermediate athletes.', difficulty: 'intermediate', durationMinutes: 40, exercises: ['Lunges', 'Plank shoulder taps', 'Jumping jacks'] },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
