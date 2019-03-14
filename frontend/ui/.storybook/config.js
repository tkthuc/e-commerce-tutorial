import { configure, addDecorator } from '@storybook/react';

import StoryRouter from 'storybook-router';

const req = require.context('../stories', true, /.tsx$/);


addDecorator(StoryRouter());

function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);

