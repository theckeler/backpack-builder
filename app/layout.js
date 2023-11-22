import "@/styles/globals.css";

export const metadata = {
  title: "Van Builder ☞ In progress",
  description: "In progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">{children}</body>
    </html>
  );
}
