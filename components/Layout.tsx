import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface TITLE {
  title: string;
  children: ReactNode;
}
const Layout: React.FC<TITLE> = ({ children, title = "Nextjs" }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="blog-nav"
                  className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Blog
                </a>
              </Link>
              <Link href="/admin-page">
                <a
                  data-testid="admin-nav"
                  className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Admin
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};
export default Layout;
