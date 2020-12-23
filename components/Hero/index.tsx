interface HeroProps {
  data: any
}

export default function Hero(props: HeroProps) {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ maxHeight: 655 }}
              src="./image.jpg"
              className="d-block w-100 img-hero"
              alt="..."
            />
            <div className="imageWrapper" />
            <div className="carousel-caption hero mt-1 mt-sm-2 mt-md-4 mt-lg-4 mt-xl-5">
              {/* <div className="hero mt-lg-4 mb-xl-5" /> */}
              <h2>Ikatan Seni Membela Diri</h2>
              <h2>
                <span>PUTRA</span> SETIA
              </h2>
              <div className="row align-items-center ">
                <div className="col">
                  <p className="location mt-1 mt-md-3 mt-lg-4">
                    <i className="fas fa-map-marker-alt"></i>Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {props.data.data.map((item: any, index: number) => {
            return (
              <div key={index} className="carousel-item">
                <img
                  src={item.imageUrl}
                  className="d-block w-100 img-hero"
                  alt="..."
                />
                <div className="imageWrapper" />
                <div className="carousel-caption hero mt-1 mt-sm-2 mt-md-4 mt-lg-4 mt-xl-5">
                  {/* <div className="hero mt-lg-4 mb-xl-5" /> */}
                  <h2>{item.title}</h2>
                  <div className="row align-items-center ">
                    <div className="col">
                      <p className="location mt-1 mt-md-3 mt-lg-4">
                        {item.subTitle}
                      </p>
                    </div>
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
