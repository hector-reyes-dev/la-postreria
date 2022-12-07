import "./ReviewItem.scss";

interface ReviewItemProps {
  icon: string;
  score: number;
  maxScore: 5 | 10;
  totalReviews: number;
}

const ReviewItem = ({
  icon,
  score,
  maxScore,
  totalReviews,
}: ReviewItemProps) => {
  return (
    <div className="review-container">
      <img src={icon} alt={icon} />
      <div className="review-info">
        <div className="score-container">
          <span className="score">{score}</span>
          <span className="max-score">/{maxScore}</span>
        </div>
        <span>{totalReviews}+ reviews</span>
      </div>
    </div>
  );
};

export default ReviewItem;
