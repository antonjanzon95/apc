import React from "react";
import Layout from "@/components/Layout";

const Registrering = () => {
  return (
    <Layout>
      <section className="pt-20 p-6 flex flex-col justify-center gap-6">
        <h1 className="text-center font-extrabold text-3xl">
          Seriespel Registrering
        </h1>

        <article className="flex flex-col items-center gap-2">
          <p>
            Skicka din anmälan till{" "}
            <a
              href="mailto:seriespel@avestapadelcenter.se"
              className="font-bold"
            >
              seriespel@avestapadelcenter.se
            </a>{" "}
            och bifoga nedan info:{" "}
          </p>
          <ul className="list-disc ml-6 flex flex-col gap-1">
            <li>
              Ange vilket seriespel ni vill spela (herrserie, damserie,
              mixserie)
            </li>
            <li>
              För- och efternamn på båda spelarna - Personnummer på båda
              spelarna
            </li>
            <li>
              Telefon och email till båda spelarna - Ange önskad
              spelnivå/division
            </li>
            <li>
              Swisha 200 SEK per person till 123 44 008 18 och märk: Seriespel
            </li>
          </ul>

          <a
            href="mailto:seriespel@avestapadelcenter.se"
            className="btn bg-gradient-to-b from-red-700 to-red-800 border-none shadow-xl mt-2"
          >
            Registrering
          </a>
        </article>
      </section>
    </Layout>
  );
};

export default Registrering;
