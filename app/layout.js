import "./../styles/globals.css";

export const metadata = {
  title: "GRestaurant",
  description: "Beatiful Restaurant Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
