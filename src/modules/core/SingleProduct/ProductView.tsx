import { useEffect, useState } from "react";
import Star from "../Helpers/icons/Star";
// import Selectbox from "../Helpers/Selectbox";
import "./ProductView.css"; // Import custom CSS file
import Selectbox from "../Helpers/SelectBox/SelectBox";
import "aos/dist/aos.css";
import AOS from "aos";

type ProductImage = {
    id: number;
    src: string;
    color: string;
};

type ProductViewProps = {
    className?: string;
    reportHandler: () => void;
};

const ProductView: React.FC<ProductViewProps> = ({ className, reportHandler }) => {
    const productsImg: ProductImage[] = [
        {
            id: 1,
            src: "product-details-1.png",
            color: "#FFBC63",
        },
        {
            id: 2,
            src: "product-details-2.png",
            color: "#649EFF",
        },
        {
            id: 3,
            src: "product-details-3.png",
            color: "#FFFFFF",
        },
        {
            id: 4,
            src: "product-details-4.png",
            color: "#FF7173",
        },
        {
            id: 6,
            src: "product-details-5.png",
            color: "",
        },
    ];

    const [src, setSrc] = useState(productsImg[0].src);

    const changeImgHandler = (current: string) => {
        setSrc(current);
    };

    const [quantity, setQuantity] = useState<number>(1);

    const increment = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };


    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className={`product-view container-fluid ${className || ""}`}>
            <div className="row">
                <div className="col-lg-6 xl-7">
                    <div className="w-100 h-100">
                        <div className="w-100 h-100 border border-qgray-border d-flex justify-content-center align-items-center overflow-hidden relative mb-3">
                            <img
                                src="https://rntest1.myshopify.com/cdn/shop/files/21_1030x.png?v=16512262180"
                                alt=""
                                className="img-fluid object-contain"
                            />
                            <div className="w-80 h-80 rounded-circle bg-qyellow text-qblack d-flex justify-content-center align-items-center text-xl font-medium position-absolute left-30 top-30">
                                <span>-50%</span>
                            </div>
                        </div>
                        {/* Add multiple Images */}
                        {/* <div className="d-flex gap-2 flex-wrap">
                            {productsImg &&
                                productsImg.length > 0 &&
                                productsImg.map((img) => (
                                    <div
                                        onClick={() => changeImgHandler(img.src)}
                                        key={img.id}
                                        className="w-110 h-110 p-15 border border-qgray-border cursor-pointer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                                            alt=""
                                            className={`w-100 h-100 object-contain ${src !== img.src ? "opacity-50" : ""}`}
                                        />
                                    </div>
                                ))}
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 xl-5">
                    <div className="product-details d-flex text-start flex-column mx-2 w-100 mt-10 lg-mt-0 aos-init aos-animate" data-aos="fade-right">
                        <span   data-aos="zoom-y-out" className="text-qgray text-xs font-normal text-uppercase tracking-wider mb-2 d-inline-block">
                            Mobile Phones
                        </span>
                        <p className="fw-bold text-qblack mb-4" data-aos="zoom-y-out" data-aos-delay="50">
                            Samsung Galaxy Z Fold3 5G 3 colors in 512GB
                        </p>

                        <div className="d-flex gap-2 items-center mb-6">
                            <div className="d-flex">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <span className="product-title font-normal text-qblack">6 Reviews</span>
                        </div>

                        <div className="d-flex gap-2 align-items-center mb-3 mt-3">
                            <span className="product-original-price mt-2">$9.99</span>
                            <span className="product-discount-price">$6.99</span>
                        </div>

                        <p className="text-sm mb-3 product-description">
                            It is a long established fact that a reader will be distracted by
                            the readable there content of a page when looking at its layout.
                        </p>


                        <div className="quantity-card-wrapper w-100 d-flex align-items-center mb-3 mt-3">
                            <div className="w-25 h-100 px-4 d-flex align-items-center border border-qgray-border">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <button onClick={decrement} type="button" className="text-base text-qgray">
                                        -
                                    </button>
                                    <span className="text-qblack">{quantity}</span>
                                    <button onClick={increment} type="button" className="text-base text-qgray">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="product-love h-100 mx-2 d-flex justify-content-center align-items-center border border-qgray-border">
                                <button type="button">
                                    <span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
                                                stroke="#D5D5D5"
                                                strokeWidth="2"
                                                strokeMiterlimit="10"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="flex-1 h-100 w-50">
                                <button type="button" className="black-btn add-cart-btn text-sm font-semibold w-100 h-100">
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        <div className="mb-3 mt-3">
                            <p className="product-infos">
                                <span className="text-black">Category :</span> 
                                <span className="text-gray mx-1">Kitchen</span> 
                            </p>
                            <p className="product-infos">
                                <span className="text-qblack">Tags :</span> 
                                <span className="text-gray mx-1">Beer, Foamer</span> 
                            </p>
                            <p className="product-infos">
                                <span className="text-qblack">SKU:</span> 
                                <span className="text-gray mx-1">KE-91039</span> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
