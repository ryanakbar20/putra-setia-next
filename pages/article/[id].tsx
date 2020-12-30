import {useEffect, useState} from 'react';
import {Navbar, Footer, Head, Article, News} from '../../components';
import data from '../../assets/data.json';

export default function ArticlePages() {
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
            <Article theme={Theme} />
            <News data={data.popularNews} theme={Theme} />
            <News data={data.newNews} theme={Theme} />
            <Footer theme={Theme} />
        </>
    )
}
