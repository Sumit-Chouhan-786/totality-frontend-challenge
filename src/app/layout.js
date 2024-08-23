import "./globals.css";


export const metadata = {
  title: "Real Estate",
  description: "Real Estate",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>real estate</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        {children}
      </body>
    </html>
  );
}
