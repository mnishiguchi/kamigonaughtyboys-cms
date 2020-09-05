import React from 'react';
import CMS from 'netlify-cms-app';
import { ja } from 'netlify-cms-locales';

// Import main site styles as a string to inject into the CMS preview pane
import styles from '!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css';

import HomePreview from './cms-preview-templates/home';
import BlogPreview from './cms-preview-templates/blog';
import TeamPreview from './cms-preview-templates/team';
import SimplePreview from './cms-preview-templates/simple';

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('team', TeamPreview);
CMS.registerPreviewTemplate('activities', SimplePreview);
CMS.registerPreviewTemplate('links', SimplePreview);

// https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale('ja', ja);

CMS.init();
