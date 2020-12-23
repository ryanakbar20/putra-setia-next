import Button from '../Button';

interface GaleryProps {
  data: any,
  theme: string
}

export default function Galery(props: GaleryProps) {
  return (
    <section className={props.theme === 'dark' ? 'galery' : 'galery light'}>
      <div className="container pt-5 pb-5">
        <h4>GALERI</h4>
        <div className="row mb-4">
          {props.data.data.map((item, index) => {
            if (index < 4) {
              return (
                <div key={item.id} className="col-6 mt-4">
                  <img
                    className="img-fluid img-thumbnail"
                    src={item.imageUrl}
                    alt="gambar1"
                  />
                </div>
              );
            }
          })}
        </div>
        <Button 
          type="nextWhite"
        />
      </div>
    </section>
  );
}
