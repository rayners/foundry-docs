import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  banelandsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'installation',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'api-reference',
      ],
    },
  ],
};

export default sidebars;
