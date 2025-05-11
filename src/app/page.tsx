import Image from "next/image";

export default async function Home() {
  // Use absolute URL with hostname for server-side fetch
  const res = await fetch("http://localhost:3000/api/hello");
  const { msg } = await res.json();
  return (
    <main className="flex justify-center mt-16">
      <h1 className="text-2xl">{msg}</h1>
    </main>
  );
}
