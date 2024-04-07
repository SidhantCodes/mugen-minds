import "./globals.css";

export const metadata = {
  title: "Mugen Minds",
  description: "Welcome to MugenMinds! Dive into a treasure trove of study resources - from question papers to detailed notes and bonus materials - designed to make your academic journey smoother and more rewarding. Explore, learn, and excel with us as we embark on this academic adventure together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
