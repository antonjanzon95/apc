import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Layout from "@/components/Layout";

const Registrera = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn("email", {
      email,
      firstName,
      lastName,
      callbackUrl: `${window.location.origin}/callback`,
      redirect: false,
    });
  };

  return (
    <Layout>
      <h1>Logga in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Förnamn"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Efternamn"
          required
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-postadress"
          required
        />
        <button type="submit">Logga in</button>
      </form>
    </Layout>
  );
};

export default Registrera;
