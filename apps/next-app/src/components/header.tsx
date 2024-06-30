import { useRouter } from "next/router";
import React from "react";
import LanguageBar from "./langauge-bar";
import { ThemeToggle } from "./theme-toggle";

const Header: React.FC = () => {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Blog Title
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/">{"Home"}</a>
            </li>
            <li>
              <a href="/about">{"About"}</a>
            </li>
            <li>
              <a href="/add-post">Add Post</a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <LanguageBar />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
