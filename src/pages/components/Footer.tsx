import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link href="Contact" className="link link-hover">
            About us - prob delete this
          </Link>
          <a className="link link-hover">Contact - this will be contact page</a>
          <a className="link link-hover">
            Jobs - this will be jobs page, people will be able top apply
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4"></div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Wavy Bagels</p>
        </div>
      </footer>
    </>
  );
}
