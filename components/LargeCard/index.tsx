import {useEffect, useState} from 'react';
import Button from '../Button';

export default function LargeCard({ theme, data }) {
  const [ClassName, setClassName] = useState([]);
 
  useEffect(() => {
    theme === 'light'
    ? setClassName(['light'])
    : setClassName([]);
  }, [theme]);

  return (
    <section className={ClassName.join(' ')}>
      <div className="container pt-5 pb-5 card-large">
        <h4>Tentang Kami</h4>
        <div className="card mt-5">
          {data.data.map((item) => {
            return (
              <div key={item.id} className="row justify-content-center">
                <div className="col-11 d-md-none ">
                  <div className="text-left">
                    <h5>{item.title}</h5>
                  </div>
                </div>
                <div className="col-11 col-md-5">
                  <img
                    src={item.imageUrl}
                    className="img-fluid my-3"
                    width="20px"
                    alt="gambar"
                  />
                </div>
                <div className="col-11 col-md-7">
                  <div className="text-left">
                    <h5 className="d-none d-md-block">{item.title}</h5>
                    <p>{item.content}</p>
                    <Button value="SELANJUTNYA" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
