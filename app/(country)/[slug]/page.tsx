import Link from "next/link";

export default function CountryPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Hello from {params.slug} page</h1>
      <Link href={"/"}>Back to home</Link>
    </main>
  );
}
