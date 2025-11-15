import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Página não encontrada!</h1>
      <p>Está pagina não existe</p>

      <Link href="/">Voltar pra Home</Link>
    </div>
  );
}
