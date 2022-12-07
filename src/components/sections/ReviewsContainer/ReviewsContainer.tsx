import Title from "../../Title/Title";
import ReviewItem from "../../ReviewItem/ReviewItem";
import tripadvisor from "../../../assets/icons/tripadvisor.png";
import google from "../../../assets/icons/google.png";
import foursquare from "../../../assets/icons/foursquare.png";
import carrusel from "../../../assets/images/carrusel.png";
import Button from "../../Button/Button";
import "./ReviewsContainer.scss";

const ReviewsContainer = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-info">
        <Title
          firstLine="Nuestra reputación es"
          secondLine="impecable"
          color="green"
        />
        <div className="reviews-container">
          <ReviewItem
            icon={tripadvisor}
            score={4.5}
            maxScore={5}
            totalReviews={120}
          />
          <ReviewItem
            icon={google}
            score={4.7}
            maxScore={5}
            totalReviews={1400}
          />
          <ReviewItem
            icon={foursquare}
            score={9.1}
            maxScore={10}
            totalReviews={800}
          />
        </div>
        <Button label="Ver modelos de franquicia" color="green" />
      </div>
      <img src={carrusel} alt="Postre" />
    </section>
  );
};

export default ReviewsContainer;
