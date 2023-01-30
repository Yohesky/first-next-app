import Link from "next/link";
import { MainLayout } from "../../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <Link href="/">ir a Home</Link>
    </MainLayout>
  );
}
