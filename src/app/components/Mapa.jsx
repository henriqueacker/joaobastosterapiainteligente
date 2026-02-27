import React from "react";

export default function Mapa() {
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.978598829426!2d-51.2315705242195!3d-30.03747183095351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979039f44c147%3A0xc7dbb54df9e10aa9!2sRua%20Washington%20Luiz%2C%201110%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090010-460!5e0!3m2!1spt-BR!2sbr!4v1685450126977!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa"
      />
    </div>
  );
}