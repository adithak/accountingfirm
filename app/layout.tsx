import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://accountingfirm-host.vercel.app"),
  title: {
    default: "Best Accounting Firm in Kerala | GST & Tax Experts",
    template: "%s | Your Firm Name",
  },
  description:
    "Leading accounting firm in Kerala offering GST consulting, income tax filing, audit and company registration services across India.",
  keywords: [
    "Accounting firm in Kerala",
    "GST consultant Kerala",
    "Income tax filing India",
    "CA in Kochi",
  ],
  openGraph: {
    title: "Best Accounting Firm in Kerala",
    description:
      "Professional GST, Income Tax and Audit Services across Kerala and India.",
    url: "https://accountingfirm-host.vercel.app/",
    siteName: "Your Firm Name",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}