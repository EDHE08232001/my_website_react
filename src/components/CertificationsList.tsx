import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  description: string[];
  verifyUrl: string;
  credlyBadgeId?: string;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issued: "2024",
    description: [
      "Demonstrated foundational knowledge of cloud concepts.",
      "Understanding of Azure services, pricing, and governance.",
      "Validated core concepts of security, compliance, and trust."
    ],
    verifyUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/EdwardHe-3595/6F33B13A1C4AA16D?sharingId=525BB39D6366413B"
  },
  {
    title: "NVIDIA Certified Associate – Generative AI (NCA-GENL)",
    issuer: "NVIDIA",
    issued: "2025",
    description: [
      "Validated understanding of generative AI concepts and workflows.",
      "Covered LLM fundamentals, training, fine-tuning, and inference.",
      "Demonstrated knowledge of NVIDIA AI Enterprise ecosystem."
    ],
    verifyUrl:
      "https://www.credly.com/badges/1155a391-de54-462a-9d6f-4f4f21dc34a4/public_url",
    credlyBadgeId: "1155a391-de54-462a-9d6f-4f4f21dc34a4"
  }
];

const CertificationsList: React.FC = () => {
  useEffect(() => {
    // Load Credly embed script once
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Certifications
      </h2>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => (
          <Card
            key={idx}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {cert.title}
              </h3>

              <p className="text-lg text-purple-600 mb-1">
                {cert.issuer}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                Issued: {cert.issued}
              </p>

              {/* Credly Badge (if available) */}
              {cert.credlyBadgeId && (
                <div className="flex justify-center">
                  <div
                    className="flex justify-center"
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id={cert.credlyBadgeId}
                    data-share-badge-host="https://www.credly.com"
                  />
                </div>
              )}


              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-left mb-6">
                {cert.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Verify Credential
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsList;