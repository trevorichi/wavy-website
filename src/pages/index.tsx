import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="menu">
      <h2>BREAKFAST HEROES</h2>
      <ul>
        <li>
          <span className="menu-item">Batman</span>
          <span className="menu-price">$6.99</span>
          <p>
            3 eggs, bacon, ham and sausage. Served with choice of small coffee,
            tea or OJ
          </p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
        <li>
          <span className="menu-item">Robin</span>
          <span className="menu-price">$6.99</span>
          <p>
            3 eggs, bacon, sausage and cheese. Served with choice of small
            coffee, tea or OJ
          </p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
      </ul>

      <h2>PLATTERS</h2>
      <ul>
        <li>
          <span className="menu-item">American</span>
          <span className="menu-price">$6.99</span>
          <p>Eggs, onions, bacon and American cheese</p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
        <li>
          <span className="menu-item">Calorie Counter</span>
          <span className="menu-price">$6.99</span>
          <p>Egg whites, turkey and Alpine Lace Swiss cheese</p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
      </ul>

      <h2>EGG SANDWICH</h2>
      <ul>
        <li>
          <span className="menu-item">Eggs</span>
          <span className="menu-price">$3.79</span>
          <p>Served with choice of small coffee, tea or OJ</p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
        <li>
          <span className="menu-item">Eggs &amp; Cheese</span>
          <span className="menu-price">$3.99</span>
          <p>Served with choice of small coffee, tea or OJ</p>
          <p className="menu-add-on">Medium Coffee $0.50</p>
          <p className="menu-add-on">Large Coffee $0.75</p>
        </li>
      </ul>

      <h2>BAGELS</h2>
      <ul>
        <li>
          <span className="menu-item">1/2 Dozen Bagels</span>
          <span className="menu-price">$6.00</span>
        </li>
        <li>
          <span className="menu-item">Bialeys</span>
          <span className="menu-price">$0.25</span>
        </li>
        <li>
          <span className="menu-item"></span>
        </li>
      </ul>
    </div>
  );
}
