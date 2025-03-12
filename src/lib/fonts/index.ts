import localFont from "next/font/local";

export const runda = localFont({
  src: [
    {
      path: "../../../public/fonts/runda/Runda-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/runda/Runda-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-runda",
});

export const suisseWorksBookItalic = localFont({
  src: "../../../public/fonts/suisse-works/SuisseWorks-BookItalic.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-suisse-works-book-italic",
});
