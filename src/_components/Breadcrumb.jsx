"use client"
import { usePathname } from "next/navigation";
import { BiCategory } from "react-icons/bi";
import { PackageSearch } from "lucide-react"
import Link from "next/link";

const BreadCrumb = () => {
  const path = usePathname();
  const pathName = path.split('/').filter((path) => path);

  // Set icon based on the first segment ('category' or 'product')
  const iconStyles = "text-gray-700 dark:text-gray-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-500 active:text-purple-700";
  const middlePageIcon = pathName[0] === "category" ? <BiCategory className={iconStyles} size={30} /> : <PackageSearch className={iconStyles} size={30} />;

  // Remove the first segment (category or product) from pathName for breadcrumb display
  const updatedPathName = pathName.slice(1);

  const homeSign = (
    <svg
      className="w-4 h-4 me-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  );

  return  (
    <div className="flex justify-center">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center text-sm md:text-xl font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          {/* Home */}
          <li>
            <Link href="/" className="flex gap-1 items-center hover:text-purple-700 dark:hover:text-purple-500">
              {homeSign} Home
            </Link>
          </li>

          {middlePageIcon && (
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {middlePageIcon}
            </li>
          )}

          {updatedPathName.map((segment, index) => {
            const href = `/${pathName.slice(0, index + 2).join("/")}`;
            return (
              <li key={index} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href={href} className="hover:text-purple-700 dark:hover:text-purple-500">
                  {segment}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
