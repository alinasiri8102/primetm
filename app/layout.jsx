import "../style/_globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";

export const metadata = {
  title: "پرایم تیم",
  description: "بهترینه بهترینا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
