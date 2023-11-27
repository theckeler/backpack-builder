import "@/styles/globals.css";

export const metadata = {
  title: "Van Builder ☞ In progress",
  description: "In progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <header className="flex min-h-[100px] items-center justify-center bg-sky-600 text-3xl text-white">
          header
        </header>

        {children}

        <footer className="flex min-h-[100px] items-center justify-center bg-sky-600 text-3xl text-white">
          footer
        </footer>
      </body>
    </html>
  );
}
