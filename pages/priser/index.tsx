import Layout from "@/components/Layout";
import React from "react";

const Priser = () => {
  return (
    <Layout>
      <section className="pt-20 p-6 flex flex-col justify-center gap-6">
        <h1 className="text-center font-extrabold text-3xl">
          Bokning & Priser
        </h1>
        <article>
          <h2 className="text-xl font-bold mb-2">Bokning</h2>
          <ul>
            <li>
              Boka via{" "}
              <a
                href="https://www.matchi.se/facilities/avestapadelcenter"
                target="_blank"
                className="font-bold"
              >
                matchi.se
              </a>{" "}
              eller på deras app.
            </li>
            <li>
              Det går även att höra av sig till{" "}
              <a href="mailto:info@avestapadelcenter.se" className="font-bold">
                info@avestapadelcenter.se
              </a>{" "}
              för att göra större bokningar såsom företagsevent osv.
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Våra priser</h2>
          <p>
            Padel blir dyrt i längden och vi vill att alla ska kunna spela, från
            barn till pensionärer. Därför har vi nyligen pressat ner våra
            priser!
          </p>
          <ul>
            <li className="font-bold">Kl 00:00-21:00:</li>
            <li>Dubbelbana: 390kr/90min (350kr som medlem)</li>
            <li>Singelbana: 145kr/60min (130kr som medlem)</li>
            <li className="font-bold">Kl 21:00-00:00:</li>
            <li>Dubbelbana: 180kr/90min (165kr som medlem)</li>
            <li>Singelbana: 145kr/60min (130kr som medlem)</li>

            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export default Priser;
