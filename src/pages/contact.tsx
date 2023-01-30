import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <Link href="/">ir a Home</Link>
      <Link href="/about">ir a About</Link>
    </MainLayout>
  );
}
