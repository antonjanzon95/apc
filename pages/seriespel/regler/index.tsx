import Layout from "@/components/Layout";
import React from "react";

const Regler = () => {
  return (
    <Layout>
      <section className="pt-20 p-6 flex flex-col justify-center gap-6">
        <h1 className="text-center font-extrabold text-3xl">
          Seriespel Regler
        </h1>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Spelregler</h2>
          <ul className="list-disc ml-6 flex flex-col gap-1">
            <li>Vunnen match ger 2 poäng, oavgjord match 1 poäng</li>
            <li>Hemmalaget väljer bollar</li>
            <li>
              Lagen som möter varandra hjälps åt att ta kontakt och hitta en
              speltid som passar
            </li>
            <li>
              Matcherna avgörs i bäst av 3 set. (Supertie i sista set är
              tillåtet om tiden kräver så)
            </li>
            <li>
              Lagen kommer överens om varje gem ska avgöras med vanlig fördel,
              *hybrid golden eller golden point vid ställning 40-40
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Ranking</h2>
          <ul className="list-disc ml-6 flex flex-col gap-1">
            <li>
              Arrangören för seriespelet förbehåller sig rätten för
              divisionsindelningen
            </li>
            <li>
              Divisionsindelningen kommer primärt baserat på föregående
              seriespel
            </li>
            <li>
              Lag som kommit 1a och 2a i föregående seriespel kommer att bli
              uppflyttade
            </li>
            <li>
              Lag som kommit sist eller näst sist i föregående seriespel
              riskerar att bli nedflyttade
            </li>
            <li>
              Lag som hamnat väldigt fel (fel division) under föregående
              seriespel kommer kunna flyttas upp eller ned flera steg (upplever
              ett lag att de spelat i fel division ange det vid serie-anmälan)
            </li>
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export default Regler;
