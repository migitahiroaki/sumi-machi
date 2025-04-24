import Link from "next/link";

export default function NavigationMenu() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white p-4 z-10">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold">住みよい町田</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}