import { ReactNode } from "react";
import style from "./global-layout.module.css";
import Link from "next/link";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
