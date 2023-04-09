import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-10 rounded-full hover:ring-2 hover:scale-105">
              <Link href="./Home">
                <img src="/headshot.png" alt="me" />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="pl-6 text-xl">Trevor Santoli</h2>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://github.com/trevorichi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/trevor-santoli-934197200/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="./Menu">
                Menu
                <MdRestaurantMenu size={25}></MdRestaurantMenu>
              </Link>
            </li>
            <li tabIndex={0}>
              <a>
                Get it Delivered!
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="https://www.ubereats.com" target="_blank">
                    Uber Eats
                  </a>
                </li>
                <li>
                  <a href="https://www.doordash.com" target="_blank">
                    DoorDash
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}