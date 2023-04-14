import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Seriespel = () => {
  return (
    <Layout>
      <section className="pt-20 p-6 flex flex-col justify-center gap-6">
        <h1 className="text-center font-extrabold text-3xl">Seriespel</h1>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">När</h2>
          <p>
            Seriespelet pågår under höst- och vårsäsongen, och under sommaren
            kör vi{" "}
            <Link href={`/sommarstegen`} className="font-bold">
              Sommarstegen.
            </Link>
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Kostnad</h2>
          <p>
            Som{" "}
            <Link href={`/medlemskap`} className="font-bold">
              medlem
            </Link>{" "}
            har du fritt inträde i seriespelet. <br />
          </p>
          <p>Utan medlemskap är inträdet 400kr/lag</p>
          <Link
            href={`/medlemskap`}
            className="btn mx-auto mt-2 bg-gradient-to-r from-red-800 to-red-700 border-none shadow-xl hover:bg-red-500"
          >
            Bli medlem
          </Link>
        </article>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Plats</h2>
          <p>
            <span className="font-semibold">Avesta Padelcenter</span> <br />
            Matcherna ska spelas på APC:s inne eller utomhusbanor för att
            godkännas i seriespelet. Deltagare i seriespelet kommer att kunna
            boka tider upp till 3 veckor i förväg (normalt är 2 veckor).
          </p>
        </article>

        <ul className="flex gap-4 justify-around items-center">
          <li className="btn bg-gradient-to-r from-red-800 to-red-700 border-none shadow-xl">
            <Link href={`/seriespel/registrering`}>Registrering</Link>
          </li>
          <li className="btn bg-gradient-to-r from-red-700 to-red-800 border-none shadow-xl">
            <Link href={`/seriespel/regler`}>Regler</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Seriespel;
