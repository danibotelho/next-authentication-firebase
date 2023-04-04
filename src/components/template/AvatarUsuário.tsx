/* eslint-disable @next/next/no-img-element */
import useAuth from "@/data/hook/useAuth";
import Link from "next/link";

export default function AvatarUsuario() {
  const { user } = useAuth();

  return (
    <Link href="/perfil">
      {user?.imagemUrl  ? (
        <img
          src={user?.imagemUrl}
          alt="Avatar d usuário"
          className={`h-10 w-10 rounded-full cursor-pointer ml-3`}
        />
      ) : (
        <div className="relative w-10 h-10 overflow-hidden  bg-gray-100 rounded-full dark:bg-gray-600 ml-3">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
    </Link>
  );
}
