"use client"
import { usePathname } from "next/navigation";
import { BiCategory } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import Link from "next/link";

const BreadCrumb = () => {
  const path = usePathname();
  const pathName = path.split('/').filter((path) => path);

  // Set icon based on the first segment ('category' or 'product')
  const iconStyles = "text-gray-700 dark:text-gray-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-500 active:text-purple-700";
  const middlePageIcon = pathName[0] === "category" ? <BiCategory className={iconStyles} size={30} /> : <AiOutlineProduct className={iconStyles} size={30} />;

  // Remove the first segment (category or product) from pathName for breadcrumb display
  const updatedPathName = pathName.slice(1);

  const arrow = (
    <svg
      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  );

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

  const spanStyle = "flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden";
  const checkoutList = "after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
  const svgStyle = "me-2 h-4 w-4 sm:h-5 sm:w-5";

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

          {pathName.map((segment, index) => {
            const href = `/${pathName.slice(0, index + 1).join("/")}`;
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
