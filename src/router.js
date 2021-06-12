import { createRouter, createWebHistory } from 'vue-router';

import DailyForecast from './pages/daily/DailyForecast';
import NotFound from './pages/NotFound';
import WeekForecast from "./pages/week/WeekForecast";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/daily' },
    { path: '/daily', component: DailyForecast },
    {
      path: '/week', component: WeekForecast
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
