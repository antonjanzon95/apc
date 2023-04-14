import React from "react";
import Layout from "@/components/Layout";

const Medlemskap = () => {
  return (
    <Layout>
      <section className="pt-20 p-6 flex flex-col justify-center gap-6">
        <h1 className="text-center font-extrabold text-3xl">Medlemskap</h1>

        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Förmåner</h2>
          <ul className="list-disc ml-6 flex flex-col gap-1">
            <li>Gratis inträde i seriespelet och sommarstegen</li>
            <li>10% rabatt på alla bokningar</li>
            <li>Boka tider 3 veckor i förtid (icke-medlem är 2)</li>
            <li>APC t-shirt (1 per år)</li>
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export default Medlemskap;
