import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type ModuleCardProps = {
  title: string;
  description: string;
  link: string;
  status?: 'stable' | 'beta' | 'development';
};

function ModuleCard({title, description, link, status = 'stable'}: ModuleCardProps) {
  const statusColors = {
    stable: 'badge--success',
    beta: 'badge--warning',
    development: 'badge--danger',
  };
  
  return (
    <div className="col col--6">
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <h3>{title}</h3>
          {status && (
            <span className={clsx('badge', statusColors[status])}>
              {status}
            </span>
          )}
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
          Enhance your Foundry VTT experience with our collection of modules
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Documentation for Foundry VTT modules including Journeys & Jamborees, ARGON Dragonbane, Realms & Reaches, and Seasons & Stars">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <ModuleCard
                title="Journeys & Jamborees"
                description="Comprehensive party management module featuring shared resources, travel mechanics, and collaborative inventory management."
                link="/journeys-and-jamborees/intro"
                status="development"
              />
              <ModuleCard
                title="ARGON Dragonbane"
                description="Enhanced Dragonbane RPG system support with quality-of-life improvements and additional features."
                link="/argon-dragonbane/intro"
                status="stable"
              />
            </div>
            <div className="row">
              <ModuleCard
                title="Realms & Reaches"
                description="Biome and terrain mapping system for narrative-driven exploration with tag-based region management."
                link="/realms-and-reaches/intro"
                status="development"
              />
              <ModuleCard
                title="Seasons & Stars"
                description="Modern calendar and timekeeping module built for Foundry v13+ with ApplicationV2 architecture."
                link="/seasons-and-stars/intro"
                status="development"
              />
            </div>
          </div>
        </section>
        
        <section className="padding-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" className="text--center margin-bottom--lg">
                  Why Use Our Modules?
                </Heading>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className="text--center">
                  <h3>🎯 Purpose-Built</h3>
                  <p>Each module addresses specific needs in the Foundry VTT ecosystem with focused, well-designed features.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <h3>🤝 Community-Driven</h3>
                  <p>Open source development with community feedback and contributions welcome.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <h3>📚 Well-Documented</h3>
                  <p>Comprehensive documentation to help you get the most out of each module.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}