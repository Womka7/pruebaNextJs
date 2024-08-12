import Link from 'next/link';

export default function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link href="/admin">
          Go to Admin Page
        </Link> <br />
        <Link href="/">
        Go to Index1
      </Link>

      </div>
    );
  }


