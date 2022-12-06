import "./Award.scss";

interface AwardProps {
  image: string;
  children: string;
}

const Award = ({ image, children }: AwardProps) => {
  return (
    <article className="award">
      <img src={image} alt="Reconocimiento" />
      <p>{children}</p>
    </article>
  );
};

export default Award;
