import { type Component } from 'solid-js';

import { Page } from '@/components/Page/Page.js';

import './index.css';

export const Home: Component = () => {
  return (
    <Page title="Home Page" back={false}>
      <div class='text-red'>123123</div>
    </Page>
  );
};
