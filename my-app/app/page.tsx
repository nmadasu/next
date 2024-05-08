import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href='/blog'>
          Blog
        </Link>
      </div>
      <div>
        <Link href='/about'>
         About
        </Link>
      </div>
      <div>
        <Link href='/demo/first'>
         Example on nested loop
        </Link>
      </div>
    </div>
  );
}
