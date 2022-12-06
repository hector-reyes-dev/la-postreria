interface TitleProps {
  firstLine: string;
  secondLine: string;
  color: "green" | "pink" | "purple";
}

const Title = ({ firstLine, secondLine, color }: TitleProps) => {
  return (
    <h2>
      <span style={{ color: `var(--${color})` }}>{firstLine}</span>
      {secondLine}
    </h2>
  );
};

export default Title;
