import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebarSeasons: SidebarsConfig = {
  seasonsSidebar: [
    'intro',
    'requirements',
    'installation',
    'user-guide',
    'calendar-packs',
    {
      type: 'category',
      label: 'Migration & Planning',
      items: [
        'migration-guide',
        'roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'developer-guide',
        'applicationv2-development',
      ],
    },
  ],
};

export default sidebarSeasons;