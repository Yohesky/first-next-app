import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <Link href="/about">ir a About</Link>
    </MainLayout>
  );
}
