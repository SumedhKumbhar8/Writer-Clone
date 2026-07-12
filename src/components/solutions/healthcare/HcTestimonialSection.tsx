import Image from "next/image";
import Link from "next/link";
import { hcPageData } from "@/data/healthcare";

export function HcTestimonialSection() {
  const { testimonial } = hcPageData;

  return (
    <section className="bg-white pt-[35px]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[730px] text-center">
          <p className="text-[20px] font-normal leading-[160%] text-[#333] max-lg:text-[18px]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Image
              src={testimonial.authorImage}
              alt={testimonial.author}
              width={99}
              height={125}
              className="h-[99px] w-[99px] rounded-[51.252px] bg-[#E4E9FF] object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-[16px] font-semibold text-black">
                {testimonial.author}
              </p>
              <p className="text-[14px] text-[#333]">
                {testimonial.role}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  width={197}
                  height={26}
                  className="h-[26px] w-auto max-w-[197px]"
                />
                <Link
                  href={testimonial.link}
                  className="inline-flex items-center justify-center text-[#333] no-underline transition-opacity hover:opacity-70"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="13.9655" cy="14.0965" r="13.3333" transform="rotate(-180 13.9655 14.0965)" fill="black"/>
                    <line x1="6.96533" y1="13.7969" x2="20.9653" y2="13.7969" stroke="white" strokeWidth="1.4"/>
                    <path d="M15.3653 20.0966L20.9653 13.7966L15.3653 7.49656" stroke="white" strokeWidth="1.4" strokeLinecap="square"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
