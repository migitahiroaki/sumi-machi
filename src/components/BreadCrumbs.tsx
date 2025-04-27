import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export interface ListElement {
  label: string;
  link?: string;
}

export default function BreadCrumbs({
  listElements,
}: {
  listElements: ListElement[];
}) {
  return (
    <nav id="breadcrumb-nav" className="flex">
      <ol
        id="breadcrumb-ol"
        className="flex overflow-x-auto whitespace-nowrap"
        aria-label="breadcrumb"
      >
        {listElements.map(({ label, link }, index) => (
          <li
            id={`breadcrumb-li-${index}`}
            className="flex items-center"
            key={index}
          >
            {listElements.length - 1 !== index ? (
              <>
                {link ? (
                  <Link href={link}>
                    <span className="text-blue-600 text-xs hover:underline">
                      {label}
                    </span>
                  </Link>
                ) : (
                  <span className="text-gray-400 text-xs">{label}</span>
                )}
                <FaChevronRight aria-hidden="true" className="text-xs mx-2" />
              </>
            ) : (
              <span className="text-sm md:text-base" aria-current="page">
                {label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
