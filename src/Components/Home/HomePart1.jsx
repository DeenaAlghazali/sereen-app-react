/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
const HomePart1 = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="col-sm-12 content-all">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="img-container">
                <img
                  src="https://sereenelghazali.github.io/e-shop/img/img1.jpg"
                  alt="boyImg"
                  className="img-responsive img-h"
                />
                <h3>boy</h3>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="img-container">
                <img
                  src="https://sereenelghazali.github.io/e-shop/img/img2.jpg"
                  alt="girlImg"
                  className="img-responsive img-h"
                />
                <div className="banner-content">
                  <span className="content-small">hot product</span>
                  <p className="content-large">new sweater</p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="content-btn">
                    shop now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6 float-right">
              <div className="img-container">
                <img
                  src="https://sereenelghazali.github.io/e-shop/img/img3.jpg"
                  alt="girlImg"
                  className="img-responsive img-h"
                />
                <h3>girl</h3>
              </div>
            </div>
          </div>
          <div className="row content-bottom">
            <div className="col-sm-6">
              <div className="img-container-bottom">
                <img
                  src="https://sereenelghazali.github.io/e-shop/img/img4.jpg"
                  alt="img"
                  className="img-responsive img-bottom-h"
                />
                <h3 className="left-h3">
                  <a href="#">new arrivals</a>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img-container-bottom">
                <img
                  src="https://sereenelghazali.github.io/e-shop/img/img5.jpg"
                  alt="img"
                  className="img-responsive img-bottom-h"
                />
                <h3 className="right-h3">
                  <a href="#">sale off</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
