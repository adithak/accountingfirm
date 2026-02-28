import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://accountingfirm-host.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://accountingfirm-host.vercel.app/gst-consulting",
      lastModified: new Date(),
    },
  ];
}