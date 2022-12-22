import "./Title.scss";

interface TitleProps {
  firstLine: string;
  secondLine: string;
  color: "green" | "pink" | "purple";
  align: string | "";
}

const Title = ({
  firstLine,
  secondLine,
  color,
  align = "start",
}: TitleProps) => {
  return (
    <h2 style={{ textAlign: align }}>
      <span style={{ color: `var(--${color})` }}>{firstLine}</span>
      {secondLine}
    </h2>
  );
};

export default Title;
