import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hrishikesh Bharadwaj | Backend & Full Stack Developer Portfolio",
  description: "Portfolio of Hrishikesh Bharadwaj, a Backend-driven Full Stack Developer specializing in REST APIs, event-driven microservices (Kafka, RabbitMQ, Redis, PostgreSQL), React.js, and Generative AI integrations.",
  keywords: [
    "Hrishikesh Bharadwaj",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js",
    "TypeScript",
    "Apache Kafka",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "Generative AI",
    "React.js",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Hrishikesh Bharadwaj" }],
  creator: "Hrishikesh Bharadwaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="dark relative w-full flex items-center justify-center ">
        {children}</body>
    </html>
  );
}
