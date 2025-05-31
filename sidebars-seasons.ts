import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebarSeasons: SidebarsConfig = {
  seasonsSidebar: [
    'intro',
    'requirements',
    'installation',
    'user-guide',
    {
      type: 'category',
      label: 'Development',
      items: [
        'applicationv2-development',
      ],
    },
  ],
};

export default sidebarSeasons;