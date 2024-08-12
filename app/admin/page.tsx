import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <Link href="/home">
        Go to Home Page
      </Link> <br />
      
      <Link href="/">
        Go to Index1
      </Link>
    </div>
  );
}

