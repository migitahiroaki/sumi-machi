export default function Header({
  brandName,
  tagline,
}: {
  brandName: string;
  tagline?: string;
}) {
  return (
    <header className="header bg-blue-300">
      <h1 className="text-2xl font-bold">{brandName}</h1>
      {tagline && <p className="text-sm">{tagline}</p>}
    </header>
  );
}
