import Link from "next/link";

export function Footer() {
  return (
    <div className="flex gap-10 px-2 py-4 bg-zinc-900 text-amber-50 justify-center w-full">
      <Link
        href="https://github.com/Paulo-Borges"
        target="_blank"
        rel="noopener noreferrer"
      >
        Devborges
      </Link>
      <Link
        href="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desenvolvedor
      </Link>
      <p>Cel: (21) 98614-9579</p>
    </div>
  );
}
