import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Consulting Services in Kerala",
  description:
    "Professional GST registration, return filing and compliance services in Kerala and across India.",
};

export default function GSTPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        GST Consulting Services in Kerala
      </h1>
      <p className="mt-4">
        We offer GST registration, return filing and compliance services for
        businesses in Kochi and across Kerala.
      </p>
    </main>
  );
}