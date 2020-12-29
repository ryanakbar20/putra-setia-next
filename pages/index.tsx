import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Hero,
  LargeCard,
  Organization,
  Table,
  Galery,
  News,
} from '../components';
import data from '../assets/data.json';
import Head from 'next/head';

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
    <div>
      <Head>
        <link rel="icon" href="https://pasebanbekasiraya.files.wordpress.com/2016/09/putra_setia.jpg?w=645" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>Putra Setia</title>
        {/* <!-- Bootstrap core JavaScript--> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.js"></script>

        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/datatables-demo.js"></script>
      </Head>
      
      <Navbar onClick={handleTheme} theme={Theme} />
      <Hero data={data.carousel} />
      <LargeCard theme={Theme} data={data.about} />
      <Organization data={data.organization} theme={Theme} />
      <Table data={data.branch} theme={Theme} />
      <Galery data={data.galery} theme={Theme} />
      <News data={data.popularNews} theme={Theme} />
      <News data={data.newNews} theme={Theme} />
    </div>
  );
}
