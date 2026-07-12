export const contactData = {
  hero: {
    title: "Contact us",
    description: "Talk to our team about bringing Writer to your organization.",
  },
  form: {
    title: "Get in touch",
    fields: [
      { name: "firstName", label: "First name", type: "text", required: true },
      { name: "lastName", label: "Last name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "message", label: "Message", type: "textarea", required: false },
    ],
    submitLabel: "Submit",
  },
  locations: {
    title: "Locations",
    items: [
      { city: "San Francisco", address: "123 Market St, San Francisco, CA" },
    ],
  },
  support: {
    title: "Support",
    description: "Existing customers can reach support through the help center.",
    email: "support@writer.com",
  },
  cta: {
    title: "Prefer to talk?",
    description: "Schedule a call with our sales team.",
    primaryCta: { label: "Book a demo", href: "/contact" },
  },
};
