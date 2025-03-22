import { Outfit } from "next/font/google";
import "./globals.css";
import { MoviesProvider } from "./context/MoviesContext";
import { QueryProvider } from "./context/QueryContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: `%s | Entertainment App`,
    default: "Home | Entertainment App",
  },
  description:
    "Never miss your favorite movies and series again. Stay up-to-date with the latest trends and releases, and easily bookmark them to create a personalized list of your favorite films and shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <div>
          <MoviesProvider>
            <QueryProvider>{children}</QueryProvider>
          </MoviesProvider>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "72px" }}
            toastOptions={{
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "5px 24px",
                backgroundColor: "var(--color-semiDarkBlue)",
                color: "var(--color-white)",
              },
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
