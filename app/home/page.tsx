import Link from 'next/link';

export default function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link href="/admin">
        <strong> Go to Admin Page</strong>
        </Link> <br />
        <Link href="/">
        <strong> Go to Index1</strong>
      </Link>

      </div>
    );
  }


