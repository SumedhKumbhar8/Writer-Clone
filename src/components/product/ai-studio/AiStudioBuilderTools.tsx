import Image from "next/image";
import Link from "next/link";
import { AI_STUDIO_BUILDER_TOOLS } from "@/data/ai-studio";

export function AiStudioBuilderTools() {
  return (
    <section className="ai_tools__section">
      <div className="container-default-sm">
        <div className="ai_tools__title">
          <h2 className="ai_tools__heading">Tools for every type of builder</h2>
        </div>

        <div className="ai_tools__row">
          {AI_STUDIO_BUILDER_TOOLS.map((tool) => (
            <div key={tool.title} className="ai_tools__card">
              <figure className="wp-block-image size-full">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={72}
                  height={72}
                />
              </figure>

              <h3 id={`h-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {tool.title}
              </h3>

              <p>{tool.description}</p>

              <Link href={tool.link.href} target="_blank" rel="noopener noreferrer">
                {tool.link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
