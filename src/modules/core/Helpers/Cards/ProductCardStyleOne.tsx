import React from 'react';
// import Compair from "../icons/Compair";
// import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
// import ThinLove from "../icons/ThinLove";

interface ProductCardStyleOneProps {
  datas: {
    cam_product_sale: number;
    cam_product_available: number;
    campaingn_product?: boolean;
    image: string;
    product_type?: string;
    review: number;
    title: string;
    price: string;
    offer_price: string;
  };
  type: number;
}

const ProductCardStyleOne: React.FC<ProductCardStyleOneProps> = ({ datas, type }) => {
  const available =
    (datas.cam_product_sale /
      (datas.cam_product_available + datas.cam_product_sale)) *
    100;
  return (
    <div
      className="product-card-one w-100 h-100 bg-white position-relative overflow-hidden"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        className="product-card-img w-100"
        style={{
          height: '300px',
          background: `url(${process.env.PUBLIC_URL}/assets/images/${datas.image}) no-repeat center`,
        }}
      >
        {datas.campaingn_product && (
          <div className="px-3 position-absolute start-0 top-3 w-100">
            <div className="progress-title d-flex justify-content-between">
              <p className="text-xs text-muted">
                Products Available
              </p>
              <span className="text-sm fw-bold">
                {datas.cam_product_available}
              </span>
            </div>
            <div className="progress w-100" style={{ height: '5px', borderRadius: '22px', backgroundColor: '#d3d3d3' }}>
              <div
                style={{
                  width: `${datas.campaingn_product ? 100 - available : 0}%`,
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  backgroundColor: type === 3 ? '#17a2b8' : '#ffc107'
                }}
              ></div>
            </div>
          </div>
        )}
        {datas.product_type && !datas.campaingn_product && (
          <div className="product-type position-absolute end-0 top-0 me-3 mt-2">
            <span
              className={`text-uppercase text-white rounded-pill fw-bold px-3 py-1 ${datas.product_type === "popular" ? "bg-success" : "bg-warning"}`}
              style={{ fontSize: '9px' }}
            >
              {datas.product_type}
            </span>
          </div>
        )}
      </div>
      <div className="product-card-details p-3 pb-3 position-relative">
        <div className="position-absolute w-100 h-10 px-3 start-0 top-50 translate-middle-y transition-all" style={{ top: '85px' }}>
          <button type="button" className={`btn btn-${type === 3 ? 'primary' : 'warning'}`}>
            <div className="d-flex align-items-center">
              <span>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z" />
                </svg>
              </span>
              <span>Add To Cart</span>
            </div>
          </button>
        </div>
        <div className="reviews d-flex mb-3">
          {Array.from(Array(datas.review), (_, i) => (
            <span key={i}>
              <Star />
            </span>
          ))}
        </div>
        <a href="/single-product">
          <p className="title mb-2 fs-6 fw-bold text-dark line-clamp-2">
            {datas.title}
          </p>
        </a>
        <p className="price">
          <span className="main-price text-muted text-decoration-line-through fw-bold">
            {datas.price}
          </span>
          <span className="offer-price text-danger fw-bold ms-2">
            {datas.offer_price}
          </span>
        </p>
      </div>
      <div className="quick-access-btns d-flex flex-column gap-2 position-absolute end-0 top-0 mt-4 me-4 transition-all">
        <a href="#">
          <span className="w-10 h-10 d-flex justify-content-center align-items-center bg-light rounded">
            {/* <QuickViewIco /> */}
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 d-flex justify-content-center align-items-center bg-light rounded">
            {/* <ThinLove /> */}
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 d-flex justify-content-center align-items-center bg-light rounded">
            {/* <Compair /> */}
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProductCardStyleOne;
