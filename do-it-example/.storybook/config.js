import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx?$/);
  context.keys().forEach(srcFiles => {
    interopRequireDefault(context(srcFiles));
  });
  // require('../src/stories/inputStory.js');
}

configure(loadStories, module);