import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Contribute to open-source projects <br />
          <span className={styles.secondHalfHeroBannerTitle}>
            and meet your next mentor in tech
          </span>
        </h1>
      </div>
    </header>
  )
}

function HowItWorks() {
  return (
    <div className="container">
      <h2 className={styles.howItWorks__title}>How it Works</h2>
      <p className={styles.howItWorks__description}>
        Duis eiusmod velit dolore labore consectetur quis dolore aliqua
        incididunt ex ut nisi. Ut ullamco voluptate laboris in aliqua. Pariatur
        dolore irure deserunt fugiat dolor fugiat. Nulla minim proident fugiat
        aliqua cillum quis minim esse in in proident dolor nisi. In enim
        deserunt ad ullamco pariatur veniam aliqua. Nostrud exercitation ex
        cillum proident aliqua eiusmod quis ut est. Aliqua est fugiat ea nulla
        nisi ad dolore aliquip nostrud esse. Duis culpa et anim anim
        reprehenderit magna quis proident consequat ut in exercitation. Dolor do
        reprehenderit commodo incididunt exercitation in. Ipsum in deserunt est
        tempor est. Ut ullamco ipsum cillum ipsum laborum. Reprehenderit dolore
        ex qui veniam occaecat labore et do do deserunt ex reprehenderit
        laborum. Dolore laboris aliqua dolore cillum eiusmod deserunt amet
        nostrud in consequat. Officia non minim velit do do eiusmod dolor
        ullamco deserunt nostrud elit. In laboris consectetur consectetur culpa.
        Consectetur aliqua adipisicing consectetur in exercitation veniam
        commodo dolore ipsum eiusmod esse nisi et adipisicing. Reprehenderit
        amet non laboris minim do cillum. Ut exercitation veniam velit proident
        quis dolore commodo occaecat laboris.
      </p>
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HowItWorks />
      </main>
    </Layout>
  )
}
