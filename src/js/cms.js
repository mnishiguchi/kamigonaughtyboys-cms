import React from 'react';
import CMS from 'netlify-cms-app';
import { ja } from 'netlify-cms-locales';

// Import main site styles as a string to inject into the CMS preview pane
import styles from '!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css';

import HomePreview from './cms-preview-templates/home';
import PostPreview from './cms-preview-templates/post';
import TeamPreview from './cms-preview-templates/team';

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('post', PostPreview);
CMS.registerPreviewTemplate('team', TeamPreview);

// https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale('ja', ja);

CMS.init();
