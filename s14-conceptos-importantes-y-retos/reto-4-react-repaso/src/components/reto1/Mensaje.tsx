interface MensajeProps {
  texto: string;
}

export const Mensaje = ({ texto }: MensajeProps) => {
  return (
    <div style={{ 
      padding: '12px', 
      backgroundColor: '#27272a', 
      border: '1px dashed #52525b', 
      borderRadius: '6px', 
      color: '#fbbf24', 
      textAlign: 'center',
      marginTop: '15px',
      fontSize: '14px'
    }}>
      ⚠️ {texto}
    </div>
  );
};