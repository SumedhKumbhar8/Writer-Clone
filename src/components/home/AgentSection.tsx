import Image from "next/image";
import Link from "next/link";

export function AgentSection() {
  return (
    <section className="hp-writer-head-wrap hp__agent-section" id="product">
      <div className="container-default-sm">
        <div className="hp-head-section">
          <div className="flex justify-center">
            <Image
              src="https://writer.com/wp-content/uploads/2026/03/Vector.webp"
              alt=""
              width={16}
              height={16}
              className="h-[16px] w-[16px]"
              aria-hidden
            />
          </div>
          <h4>WRITER AGENT</h4>
          <h2>
            Not a tool you prompt.
            <br />
            An agent you delegate to.
          </h2>
          <p>
            Describe what you need and WRITER executes from start to finish, delivering polished,
            on-brand work in minutes.
          </p>
          <div className="wp-block-buttons">
            <div className="wp-block-button">
              <Link href="/product/writer-agent/" className="wp-block-button__link">
                →&nbsp; Explore WRITER Agent
              </Link>
            </div>
          </div>
        </div>

        <div className="writer-agent-slider relative w-full overflow-hidden">
          <Image
            src="https://writer.com/wp-content/uploads/2026/04/WPI2026-%E2%80%93-8.png"
            alt="WRITER Agent interface"
            width={1024}
            height={481}
            className="h-[481px] w-[1024px] max-w-full object-cover object-top"
            sizes="1024px"
          />
        </div>
      </div>
    </section>
  );
}
