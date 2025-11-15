type PostProps = {
  name: string;
  diameter: number;
  climate: string;
};

type resProps = {
  results: PostProps[];
};

export default async function Home() {
  const resposta = await fetch("https://swapi.dev/api/planets?limit=3");
  const data: resProps = await resposta.json();

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-zinc-800 font-sans ">
      <h1 className="text-center font-bold mb-5">Home</h1>

      {data.results.map((result) => (
        <div
          key={result.name}
          className="flex flex-col mb-5 p-4 rounded-md bg-gray-600"
        >
          <h1>{result.name}</h1>
          <p>{result.diameter}</p>
          <p>{result.climate}</p>
        </div>
      ))}
    </div>
  );
}
