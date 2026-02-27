import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function BotaoWhatsapp({ telefone }) {
  const whatsappURL = `https://api.whatsapp.com/send?phone=${telefone}`;

  return (
    <div className="fixed bottom-4 right-4 z-9999">
      <Link
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11.25 w-11.25 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </Link>
    </div>
  );
}