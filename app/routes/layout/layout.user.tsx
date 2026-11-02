import { Outlet } from "react-router";
import type { Route } from "./+types/layout.user";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Layout user" },
    { name: "description of layout user", content: "Welcome to layout user" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}