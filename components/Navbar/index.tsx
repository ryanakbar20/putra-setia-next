import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Button from '../Button';

export default function HeaderCustom({ onClick, theme }) {
  const router = useRouter();
  const [ClassName, setClassName] = useState([
    'navbar',
    'navbar-expand-lg',
    'navbar-dark',
    'bg-dark',
    'fixed-top',
  ]);

  useEffect(() => {
    theme === 'light'
    ? setClassName([
      ...ClassName,
      'light'
    ])
    : setClassName([
      ...ClassName,
      'dark'
    ]);
  }, [theme])

  return (
    <nav id="nav" className={ClassName.join(' ')}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <div className="brand-text-icon">
            Putra <span>Setia.</span>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto d-flex flex-row ">
            <li className="nav-item active mr-5">
              <a className="nav-link" onClick={() => router.push('/')}>
                Home
              </a>
            </li>
            <li className="nav-item active mr-5">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item active mr-5">
              <a className="nav-link" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <div onClick={onClick} className="nav-link">
                <Button
                  type="mode"
                  value={theme === 'dark' ? '🌜 Dark' : '🌞 Light'}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
