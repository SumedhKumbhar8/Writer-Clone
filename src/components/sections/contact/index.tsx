import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactData } from "@/data/contact";

export function ContactFormSection() {
  const { form } = contactData;

  return (
    <Section>
      <Container>
        <div className="mx-auto flex max-w-xl flex-col gap-8">
          <SectionHeading title={form.title} />
          <form className="flex flex-col gap-4">
            {form.fields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2">
                <span className="text-body font-medium">{field.label}</span>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    rows={4}
                    className="rounded-xl border border-cloud-white px-4 py-3 text-body"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="min-h-11 rounded-full border border-cloud-white px-4 py-3 text-body"
                  />
                )}
              </label>
            ))}
            <button
              type="submit"
              className="min-h-11 rounded-full bg-action-blue px-6 py-3 text-body text-canvas-white"
              suppressHydrationWarning
            >
              {form.submitLabel}
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
