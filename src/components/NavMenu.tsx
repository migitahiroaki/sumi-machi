import Link from "next/link";

export default function NavigationMenu() {
  return (
    <nav className="text-center bg-green-100">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
