interface SeparatorProps {
  color: string;
}

const Separator = ({ color }: SeparatorProps) => {
  return (
    <hr style={{ width: "40%", borderTop: `1px solid var(--${color})` }} />
  );
};

export default Separator;
