import {FaWhatsapp} from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5493537666748?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20acerca%20de..."
      className="whatsapp"
      target="_blank"
    >
      {" "}
      <FaWhatsapp style={{ color: 'white' }} />
    </a>
  );
};

export default WhatsappButton;