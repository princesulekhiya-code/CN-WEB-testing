import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
