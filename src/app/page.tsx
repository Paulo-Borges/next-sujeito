import Posts from "./posts/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-20 bg-zinc-800 font-sans ">
      <Dashboard />
      <Posts />
    </div>
  );
}
