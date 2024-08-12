import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <Link href="/home">
      <strong> Go to Home Page</strong>
      </Link> <br />

      <Link href="/">
      <strong>  Go to Index1 </strong>
      </Link>
    </div>
  );
}

