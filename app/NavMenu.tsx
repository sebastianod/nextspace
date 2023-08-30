import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex flex-row items-center justify-between p-10 bg-blue-500 ">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className="flex flex-row justify-between w-44">
        <li>
          <Link href={"/about"} className="text-white">About</Link>
        </li>
        <li>
          <Link href={"/blog"} className="text-white">Blog</Link>
        </li>
        <li>
          <Link href={"/users"} className="text-white">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
