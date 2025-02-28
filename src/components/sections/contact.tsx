import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Facebook,
  Send,
  Loader2,
  Github,
} from "lucide-react";

import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslations } from "next-intl";

const socialLinks = [
  { Icon: Github, likes: "https://github.com/lkgiovani" },
  { Icon: Linkedin, likes: "https://www.linkedin.com/in/lkgiovani/" },
  { Icon: Mail, likes: "mailto:lkgiovani@gmail.com" },
  {
    Icon: Phone,
    likes:
      "https://wa.me/5561984806923?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação.%20Poderia%20me%20passar%20mais%20informações?",
  },
];

export default function Contact() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage(t("form.successMessage"));
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(t("form.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle>{t("title")} </SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-full h-40 relative">
            <Image
              src="/go.png"
              alt={t("logoAlt")}
              layout="fill"
              objectFit="cover"
              className="mb-6"
            />
          </div>
          <div className="flex justify-center w-full gap-6">
            {socialLinks.map((Icon, index) => (
              <a
                key={index}
                href={Icon.likes}
                className="w-10 h-10 rounded-full border border-primary/80 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground "
                target="_blank"
              >
                <Icon.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                placeholder={t("form.firstName")}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none"
                aria-label={t("form.firstName")}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                placeholder={t("form.lastName")}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none"
                aria-label={t("form.lastName")}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder={t("form.phone")}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none"
                aria-label={t("form.phone")}
              />
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder={t("form.subject")}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none"
                aria-label={t("form.subject")}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={t("form.email")}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none"
              aria-label={t("form.email")}
              required
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder={t("form.message")}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground border-gray-700 focus:border-primary focus:outline-none resize-none"
              aria-label={t("form.message")}
              required
            ></textarea>

            {submitMessage && (
              <div
                className={`text-sm px-3 py-2 rounded ${
                  submitMessage.includes("thank")
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary/80 text-foreground font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("form.submitting")}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t("form.submit")}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
