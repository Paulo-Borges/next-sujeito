import Contatos from "./contatos/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 font-sans ">
      <Dashboard />
      <Contatos />
    </div>
  );
}
