import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Simple Calendar Compatibility Bridge Documentation Sidebar
 */
const sidebars: SidebarsConfig = {
  compatSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'installation',
      ],
    },
    {
      type: 'category', 
      label: 'Module Integration',
      items: [
        'simple-weather-integration',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'api-reference',
        'troubleshooting',
      ],
    },
  ],
};

export default sidebars;