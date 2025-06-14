import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  familiarSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'installation', 'user-guide'],
    },
    {
      type: 'category', 
      label: 'Advanced',
      items: ['advanced-features'],
    },
  ],
};

export default sidebars;