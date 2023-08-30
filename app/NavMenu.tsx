import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav>
      <Link href={"/"}>
        <Image
          src="/public/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul>
      <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
