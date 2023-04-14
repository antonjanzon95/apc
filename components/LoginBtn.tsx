import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="dropdown">
          <label
            tabIndex={0}
            className="flex gap-2 justify-center items-center"
          >
            <p className="text-lg font-semibold">{session.user?.name}</p>
            <Image
              src={session.user?.image ?? ""}
              alt="Portrait"
              width={48}
              height={48}
              className="rounded-full"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-gray-900"
          >
            <li>Profil</li>
            <li onClick={() => signOut()}>Logga ut</li>
          </ul>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn()} className="btn">
            Logga in
          </button>
        </div>
      )}
    </>
  );
}
