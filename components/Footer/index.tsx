import {useEffect, useState} from 'react';

export default function Footer({theme}) {
    const [ClassName, setClassName] = useState(['footer']);

  useEffect(() => {
    theme === 'light'
    ? setClassName([...ClassName, 'light'])
    : setClassName(['footer']);
  }, [theme]);
    return (
        <>
            <section className={ClassName.join(' ')}>
                <div className="container">
                    <div className="row py-5 justify-content-between">
                        <div className="col-6">
                            <div className="row">
                                <div className="col">
                                    <div className="brand-text-icon">
                                        Putra <span>Setia.</span>
                                    </div>
                                    <p className="text-left text-white">
                                    Jl. Satria 1 No. 64 RT.08 / 02
                                    Ujung Menteng - Jakarta Timur 13960
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <div className="col">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="col">
                                    <i className="fas fa-phone"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={theme !== 'dark' && 'light'}>
                <div className="d-flex justify-content-center py-2">
                    <p className={`text-center ${theme !== 'dark' ? 'text-body' : 'text-white'}`}>
                        Copyright ©2021 Putra Setia | All Rights Reserved
                    </p>
                </div>
            </section>
        </>
    )
}
