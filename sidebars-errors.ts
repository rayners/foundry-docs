import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  errorsSidebar: [
    'intro',
    'installation',
    'integration',
    'api-reference',
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'endpoint-setup',
        'privacy-guidelines',
        'testing-debugging',
      ],
    },
    {
      type: 'category',
      label: 'Legal & Compliance',
      items: [
        'privacy-policy',
        'legal-compliance',
      ],
    },
    {
      type: 'link',
      label: 'GitHub Repository',
      href: 'https://github.com/rayners/fvtt-errors-and-echoes',
    },
    {
      type: 'link', 
      label: 'Reference Implementation',
      href: 'https://github.com/rayners/sentry-relay',
    },
  ],
};

export default sidebars;