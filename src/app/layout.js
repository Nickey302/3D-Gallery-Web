import './globals.css'

export const metadata = {
  title: "3D Web Gallery",
  description: "This Web Is 3D Art Gallery For Artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
