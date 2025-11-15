// SERVER COMPONENTS
type PostProps = {
  name: string;
  url: string;
};

type resProps = {
  results: PostProps[];
};

export default async function Dashboard() {
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data: resProps = await resposta.json();

  return (
    <div className="flex flex-col h-screen pt-20">
      <h1 className="text-center font-bold">Dashboard</h1>

      <div className="flex flex-col gap-6 p-20 ">
        {data.results.map((result) => (
          <div
            key={result.name}
            className="bg-gray-400 rounded-md text-center p-2"
          >
            <h1>{result.name}</h1>
            <p>{result.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
