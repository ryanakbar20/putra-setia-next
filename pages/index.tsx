import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Hero,
  LargeCard,
  Organization,
  Table,
  Galery,
  News,
  Footer,
  Head
} from '../components';
import data from '../assets/data.json';

export default function Landing() {
  const [Theme, setTheme] = useState('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setMode('dark');
    }
  }, []);

  const setMode = (mode: string) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  const handleTheme = () => {
    Theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return (
    <>
      <Head />
      <Navbar onClick={handleTheme} theme={Theme} />
      <Hero data={data.carousel} />
      <LargeCard theme={Theme} data={data.about} />
      <Organization data={data.organization} theme={Theme} />
      <Table data={data.branch} theme={Theme} />
      <Galery data={data.galery} theme={Theme} />
      <News data={data.popularNews} theme={Theme} />
      <News data={data.newNews} theme={Theme} />
      <Footer theme={Theme} />
    </>
  );
}
