import { type Component, } from 'solid-js';

import { App } from '@/components/App.js';
import { NoiseCanvas } from './NoiseCanvas/index.jsx';

// const Inner: Component = () => {
//   const debug = retrieveLaunchParams().startParam === 'debug';
//   if (debug) {
//     import('eruda').then((lib) => lib.default.init());
//   }

//   return (
//     <TonConnectUIProvider manifestUrl={publicUrl('tonconnect-manifest.json')}>
//       <App/>
//     </TonConnectUIProvider>
//   );
// };

export const Root: Component = () => {
  return (
    <div class='' style={{position:'relative'}}>
      <NoiseCanvas/>
      <App />
    </div>
  );
};
