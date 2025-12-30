// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Enterprise sidebar links - consistent jbcom branding
const enterpriseSidebarLinks = {
  label: 'jbcom Enterprise',
  items: [
    { label: 'jbcom Hub', link: 'https://jbcom.github.io', attrs: { target: '_blank' } },
    { label: 'Agentic (AI)', link: 'https://agentic.dev', attrs: { target: '_blank' } },
    { label: 'Strata (3D)', link: 'https://strata.game', attrs: { target: '_blank' } },
    { label: 'Extended Data', link: 'https://extendeddata.dev', attrs: { target: '_blank' } },
  ],
};

export default defineConfig({
  site: 'https://arcade-cabinet.github.io',
  integrations: [
    starlight({
      title: 'Arcade Cabinet',
      description: 'Retro-inspired games and interactive experiences',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/arcade-cabinet' },
      ],
      head: [
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'jbcom Enterprise' } },
        { tag: 'meta', attrs: { name: 'author', content: 'Jon Bogaty' } },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/' },
          ],
        },
        {
          label: 'Games',
          autogenerate: { directory: 'games' },
        },
        {
          label: 'Packages',
          autogenerate: { directory: 'packages' },
        },
        enterpriseSidebarLinks,
      ],
      credits: true,
      lastUpdated: true,
    }),
  ],
});
