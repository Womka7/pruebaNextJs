import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main >
      <h1>Index1</h1>

      <Link href="/home">
        Go to Home Page
      </Link> <br />

      <Link href="/admin">
        Go to Admin Page
      </Link>

    </main>
  );
}
