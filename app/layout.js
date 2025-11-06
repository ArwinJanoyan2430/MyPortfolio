import { Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"], weight: ["800"], variables: ["--font-montserrat"],
});


export const metadata = {
  title: "Portfolio - Arwin Janoyan",
  description: "This is Arwin Janoyan's personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
