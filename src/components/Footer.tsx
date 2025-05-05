import { AUTHOR_NAME, SITE_NAME } from "@/lib/constant";
import { RiNextjsLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      id="footer-brand"
      className="footer bg-gray-200 text-center py-16 my-8"
    >
      <hr />
      <p>
        © 2025 {SITE_NAME} - {AUTHOR_NAME}
      </p>
      <p className="inline-block text-xs">
        powered by Next.js{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <RiNextjsLine className="inline" />
        </a>{" "}
      </p>
    </footer>
  );
}
