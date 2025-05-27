import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  jjSidebar: [
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
        'quick-start',
        'requirements',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'party-management',
        'travel-system',
        'resources',
        'permissions',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'system-configuration',
        'simple-worldbuilding-guide',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'contributing',
        'localization',
        'api-reference',
      ],
    },
  ],
};

export default sidebars;