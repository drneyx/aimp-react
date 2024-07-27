import { ChangeEvent } from "react";
import Star from "../Helpers/icons/Star";
import InputCom from "../Helpers/InputCom";
// import LoaderStyleOne from "../Helpers/Loaders/LoaderStyleOne";
import StarRating from "../Helpers/StarRating";
// import "../styles/reviews.css"; // Assuming you have a separate CSS file for styles
import LoaderStyleOne from "../Helpers/Loader/LoaderStyleOne";

interface Comment {
    id: number;
    author: string;
    review: number;
    comments: string;
    replys?: Reply[];
}

interface Reply {
    id: number;
    author: string;
    comments: string;
}

interface ReviewsProps {
    comments: Comment[];
    rating: number;
    ratingHandler: (rating: number) => void;
    name: string;
    nameHandler: (name: string) => void;
    email: string;
    emailHandler: (email: string) => void;
    phone: string;
    phoneHandler: (phone: string) => void;
    message: string;
    messageHandler: (message: string) => void;
    reviewAction: () => void;
    hoverRating: number;
    hoverHandler: (rating: number) => void;
    reviewLoading: boolean;
}

export default function Reviews({
    comments,
    rating,
    ratingHandler,
    name,
    nameHandler,
    email,
    emailHandler,
    phone,
    phoneHandler,
    message,
    messageHandler,
    reviewAction,
    hoverRating,
    hoverHandler,
    reviewLoading,
}: ReviewsProps) {
    return (
        <div className="review-wrapper">
            <div className="reviews mb-5">
                {/* comments */}
                <div className="comments">
                    {comments &&
                        comments.length > 0 &&
                        comments.map((comment) => (
                            <div key={comment.id} className="comment-item bg-white p-4 mb-4">
                                <div className="comment-author d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                                                alt=""
                                                className="img-fluid rounded-circle"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        </div>
                                        <div className="ms-3">
                                            <p className="text-qblack fw-medium">{comment.author}</p>
                                            <p className="text-qgray">London, UK</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="star-icons">
                                            {Array.from(Array(comment.review), (_, index) => (
                                                <Star key={index} />
                                            ))}
                                        </div>
                                        <span className="text-qblack fw-normal ms-1">
                                            ({comment.review}.0)
                                        </span>
                                    </div>
                                </div>
                                <div className="comment-text mb-3">
                                    <p className="text-qgray">{comment.comments}</p>
                                </div>
                                {comment.replys &&
                                    comment.replys.length > 0 &&
                                    comment.replys.map((reply) => (
                                        <div key={reply.id} className="sub-comment-item bg-white p-4 border-top">
                                            <div className="sub-comment-author mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/assets/images/comment-user-2.png`}
                                                            alt=""
                                                            className="img-fluid rounded-circle"
                                                            style={{ width: "50px", height: "50px" }}
                                                        />
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="text-qblack fw-medium">{reply.author}</p>
                                                        <p className="text-qgray">London, UK</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sub-comment-text">
                                                <p className="text-qgray">{reply.comments}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
                {/* load comments */}
                <div className="load-more d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">
                        Load More
                    </button>
                </div>
            </div>
            <div className="write-review">
                <h1 className="text-2xl fw-medium text-qblack mb-4">Write Your Review</h1>

                <div className="review-rating mb-4">
                    <StarRating
                        hoverRating={hoverRating}
                        hoverHandler={hoverHandler}
                        rating={rating}
                        ratingHandler={ratingHandler}
                    />
                    <span className="text-qblack fw-normal ms-1">({rating}.0)</span>
                </div>

                <div className="review-form">
                    <div className="form-fields mb-4">
                        <div className="mb-3">
                            <InputCom
                                label="Name*"
                                placeholder=""
                                type="text"
                                name="name"
                                value={name} inputHandler={function (event: ChangeEvent<HTMLInputElement>): void {
                                    throw new Error("Function not implemented.");
                                } }                                // inputHandler={nameHandler}
                                // className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <InputCom
                                label="Email*"
                                placeholder=""
                                type="email"
                                name="email"
                                value={email} inputHandler={function (event: ChangeEvent<HTMLInputElement>): void {
                                    throw new Error("Function not implemented.");
                                } }                                // inputHandler={emailHandler}
                                // className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <InputCom
                                label="Phone Number*"
                                placeholder=""
                                type="text"
                                name="phone"
                                value={phone} inputHandler={function (event: ChangeEvent<HTMLInputElement>): void {
                                    throw new Error("Function not implemented.");
                                } }                                // inputHandler={phoneHandler}
                                // className="form-control"
                            />
                        </div>
                    </div>
                    <div className="message-group mb-4">
                        <label htmlFor="message" className="input-label text-qgray">
                            Message*
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            // onChange={messageHandler}
                            className="form-control"
                            rows={3}
                        ></textarea>
                    </div>

                    <div className="submit-button">
                        <button onClick={reviewAction} type="button" className="btn btn-primary">
                            <span className="button-content d-flex align-items-center">
                                <span className="button-text fw-semibold">Submit Review</span>
                                {reviewLoading && (
                                    <span className="loader ms-2">
                                        <LoaderStyleOne />
                                    </span>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
