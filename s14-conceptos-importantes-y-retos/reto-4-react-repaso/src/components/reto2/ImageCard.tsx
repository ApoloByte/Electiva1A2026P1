interface ImageCardProps {
  imgName: string;
  baseUrl: string;
}

export const ImageCard = ({ imgName, baseUrl }: ImageCardProps) => {
  return (
    <div style={{ 
      padding: '15px', 
      background: '#1c1c1e', 
      borderRadius: '10px', 
      border: '1px solid #3a3a3c',
      textAlign: 'center',
      marginBottom: '15px'
    }}>
      <span style={{ 
        display: 'block', 
        marginBottom: '10px', 
        fontFamily: 'monospace', 
        color: '#a1a1aa', 
        fontSize: '13px' 
      }}>
        📷 {imgName}
      </span>
      <img
        src={`${baseUrl}${imgName}`}
        alt={imgName}
        style={{ 
          width: '100%', 
          maxHeight: '300px', 
          objectFit: 'cover', 
          borderRadius: '6px', 
          border: '1px solid #48484a' 
        }}
      />
    </div>
  );
};