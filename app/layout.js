import "@/styles/globals.css";

export const metadata = {
  title: "Van Builder ☞ In progress",
  description: "In progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        {/* <header className="bg-black">asdasd</header> */}

        {children}

        {/* <footer className="bg-black">asdasd</footer> */}
      </body>
    </html>
  );
}
