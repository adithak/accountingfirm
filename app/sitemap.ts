import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourfirmname.in",
      lastModified: new Date(),
    },
    {
      url: "https://yourfirmname.in/services/gst-consulting",
      lastModified: new Date(),
    },
  ];
}