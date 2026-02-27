'use client';


import React, { useState, useEffect } from 'react';
import Template from '@/app/layouts/Template';
import Tittle from '@/app/components/Tittle';
import Mapa from '@/app/components/Mapa'; 
import BotaoWhatsapp from '@/app/components/ButtonWhatsapp';
import  Servicos  from '@/app/components/Servicos';
import Agendamentos from '../components/Agendamentos';


export default function Home() {
  const servicos = [
    {
      titulo: "Massagem Relaxante",
      descricao: `Suspendisse aliquet nunc eu diam pharetra, quis accumsan odio rutrum. 
      Quisque egestas vestibulum fermentum. Cras rutrum eros ut ante pharetra fringilla.`
    },
    {
      titulo: "Massagem Terapêutica",
      descricao: `Proin euismod ultricies tincidunt. Etiam convallis turpis metus, 
      nec ullamcorper erat sodales quis. Nulla congue lorem et dignissim rhoncus.`
    },
    {
      titulo: "Massagem Desportiva",
      descricao: `Nam id efficitur neque. Nulla ultricies malesuada dolor a eleifend. 
      Class aptent taciti sociosqu ad litora torquent per conubia nostra.`
    },
  ];

  return (
    <Template>
      <section className="scroll-mt-24" id="agendamento">
        <Tittle titulo="Agendamentos" />
        <Agendamentos />
      </section>

      <section className="scroll-mt-24" id="servicos">
        <Tittle titulo="Serviços" />
        <div className="grid gap-4 md:grid-cols-2">
          {servicos.map((item, index) => (
            <Servicos titulo={item.titulo} texto={item.descricao} key={index} />
          ))}
        </div>
      </section>

      <section className="scroll-mt-24" id="localizacao">
        <Tittle titulo="Localização" />
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <Mapa />
        </div>
      </section>

      <section className="scroll-mt-24" id="sobre">
        <Tittle titulo="Sobre" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Terapeuta de Massoterapia</h2>
            <p className="mb-3 text-slate-700">
              Olá, sou [Nome do Terapeuta], terapeuta de massoterapia com anos de experiência no campo. Minha paixão é
              ajudar as pessoas a alcançar o equilíbrio e o bem-estar por meio das massagens terapêuticas.
            </p>
            <p className="mb-3 text-slate-700">
              Tenho formação em diversas técnicas de massagem, incluindo massagem relaxante, massagem desportiva e
              massagem profunda. Utilizo uma abordagem holística, adaptando cada sessão às necessidades específicas de
              cada cliente.
            </p>
            <p className="text-slate-700">
              Minha missão é proporcionar um ambiente tranquilo e acolhedor, onde meus clientes possam se sentir
              relaxados e revitalizados. Acredito no poder curativo do toque terapêutico e estou comprometido em
              oferecer os melhores cuidados a cada pessoa que busca meus serviços.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Benefícios da Massoterapia</h2>
            <p className="mb-3 text-slate-700">
              A massoterapia oferece uma série de benefícios para o corpo e a mente. Além de aliviar o estresse e a
              tensão muscular, as massagens terapêuticas podem melhorar a circulação sanguínea, reduzir a dor e
              promover a recuperação muscular.
            </p>
            <p className="mb-3 text-slate-700">
              As sessões de massagem também podem ajudar a melhorar a qualidade do sono, aliviar dores crônicas,
              fortalecer o sistema imunológico e proporcionar uma sensação geral de relaxamento e bem-estar.
            </p>
            <p className="text-slate-700">
              Estou comprometido em oferecer um serviço profissional e personalizado, para que meus clientes possam
              desfrutar de todos os benefícios que a massoterapia tem a oferecer. Entre em contato para agendar uma
              sessão e comece sua jornada rumo ao equilíbrio e à saúde.
            </p>
          </div>
        </div>
      </section>

      <BotaoWhatsapp telefone={984964251} />
    </Template>
  );
}