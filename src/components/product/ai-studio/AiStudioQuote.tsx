import Image from "next/image";

type AiStudioQuoteProps = {
  text: string;
  author: string;
  role: string;
  photo: string;
  companyLogo?: string;
  company?: string;
  className?: string;
};

export function AiStudioQuote({
  text,
  author,
  role,
  photo,
  companyLogo,
  company,
  className,
}: AiStudioQuoteProps) {
  return (
    <section className={className ?? "ai-studio-quote relative overflow-hidden py-[52px]"}>
      <div className="mx-auto max-w-[760px] px-5 text-center lg:px-[15px]">
        <blockquote>
          <p className="mt-0 text-[clamp(18px,3vw,32px)] font-normal leading-[1.25] text-canvas-white lg:text-[32px] lg:leading-10">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center">
            <div className="w-[99px] shrink-0">
              <Image
                src={photo}
                alt={author}
                width={200}
                height={249}
                className="h-auto w-[99px]"
              />
            </div>
            <div className="pl-5 text-left">
              <p className="mb-2 text-[16px] font-normal leading-[1.625] text-canvas-white">
                <strong className="font-semibold">{author}</strong>
                <br />
                {role}
              </p>
              {companyLogo ? (
                <Image
                  src={companyLogo}
                  alt={company ?? ""}
                  width={127}
                  height={27}
                  className="h-6 w-auto brightness-0 invert"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
