import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-end mr-0 mt-0 mb-0 md:mb-0">
      <Link legacyBehavior href={currentPath} locale="es">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          Spanish
        </a>
      </Link>
      <Link legacyBehavior href={currentPath} locale="fr">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          French
        </a>
      </Link>
      <Link legacyBehavior href={currentPath} locale="en">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          English
        </a>
      </Link>
    </section>
  );
}
