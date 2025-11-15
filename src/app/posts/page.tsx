// SERVER COMPONENTS

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type resProps = {
  posts: PostProps[];
};

export default async function Posts() {
  const res = await fetch("https://dummyjson.com/posts?limit=5");
  const data: resProps = await res.json();

  return (
    <div className="flex flex-col h-screen pt-20">
      <h1 className="text-center mt-5 mb-2">Posts</h1>

      <div className="flex flex-col gap-4 mx-4">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-600 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
