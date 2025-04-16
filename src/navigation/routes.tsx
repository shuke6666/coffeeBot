import type { Component } from 'solid-js';

import { Home } from '@/pages/Home/index.js';

interface Route {
  path: string;
  Component: Component;
  title?: string;
  Icon?: Component;
}

export const routes: Route[] = [
  { path: '/', Component: Home },
 
];
