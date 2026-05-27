interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h2 style={{ 
      color: '#4ade80', 
      textAlign: 'center', 
      fontSize: '24px', 
      marginBottom: '10px' 
    }}>
      {text}
    </h2>
  );
};