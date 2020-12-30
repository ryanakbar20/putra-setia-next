import {useEffect, useState} from 'react'

export default function Article({theme}) {
    const [ClassName, setClassName] = useState(['article', 'header']);
    const [ContentClass, setContentClass] = useState(['text-left', 'text-white']);
  
    useEffect(() => {
      if (theme === 'light') {
        setClassName(['article', 'light']);
        setContentClass(['text-left', 'text-body']);
      } else {
        setClassName(['article', 'header']);
        setContentClass(['text-left', 'text-white']);
      }
    }, [theme]);

    return (
        <>
            <section className={ClassName.join(' ')}>
                <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col">
                            <h1 className={ContentClass.join(' ')}>
                                Sejarah Perkembangan Pencak Silat Putra Setia
                            </h1>
                            <small className="text-left my-3">
                                18 Juni 2020
                            </small>
                            <img
                            style={{ maxHeight: 655 }}
                            src="../image.jpg"
                            className="d-block w-100 img-hero mt-4"
                            alt="..."
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`article ${theme !== 'dark' && 'light'}`}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <p className={ContentClass.join(' ')}>
                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).
                            </p>
                            <p className={ContentClass.join(' ')}>
                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).

                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).
                            </p>
                            <img
                            style={{ maxHeight: 655 }}
                            src="../image.jpg"
                            className="d-block w-100 img-hero my-4"
                            alt="..."
                            />
                            <p className={ContentClass.join(' ')}>
                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).

                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).
                            </p>
                            <p className={ContentClass.join(' ')}>
                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).

                            Ikatan Seni Membela Diri (ISMD) Putra Setia sudah
                            melaksanakan kegiatannya pada awal tahun 1980 an di daerah
                            kampung Bulak Klender, Jakarta Timur Dipimpin Oleh
                            Guru Besar Putra Setia H. Muhammad Muchtar Hasfullah
                            atau akrab di panggil Abang As. (tahun 1989 Lebih dikenal
                            dengan sebutan Habib).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
