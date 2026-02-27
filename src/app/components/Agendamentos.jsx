import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Agendamentos() {
  return (
    <section id="agendamento" className="w-full px-4 md:px-0">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-slate-200">
        <div className="text-center">

        <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Agendamentos
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#A9CD43]" />

          <p className="mb-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Os atendimentos são realizados mediante agendamento prévio.
          </p>

          <p className="mb-8 text-base md:text-lg text-slate-600 leading-relaxed">
            Para reservar seu horário, envie uma mensagem pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green-500 px-7 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            (51) 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
}