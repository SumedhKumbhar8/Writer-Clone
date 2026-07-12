import Image from "next/image";
import Link from "next/link";
import { techPageData } from "@/data/technology";

export function TechTestimonialSection() {
  const { testimonial } = techPageData;

  return (
    <section className="bg-[#F5F5F9] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[730px] text-center">
          <p className="text-[20px] font-normal leading-[160%] text-[#333]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Image
              src={testimonial.authorImage}
              alt={testimonial.author}
              width={56}
              height={56}
              className="h-14 w-14 rounded-[51.252px] bg-[#E4E9FF] object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-[16px] font-semibold text-black">{testimonial.author}</p>
              <p className="text-[14px] text-[#333] whitespace-pre-line">{testimonial.role}</p>
            </div>
            <span className="hidden text-[#333] sm:inline">|</span>
            <Image
              src={testimonial.companyLogo}
              alt="Salesforce"
              width={32}
              height={58}
              className="h-8 w-auto max-w-[136px]"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href={testimonial.link}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#333] underline transition-opacity hover:opacity-70"
            >
              Read the story
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E4E7ED] transition-all hover:bg-[#333]">
                <svg width="16" height="7" viewBox="0 0 16 7" fill="none" className="text-black transition-colors group-hover:text-white">
                  <path d="M10.293 0.293L9 1.586L12.414 5H0V7H12.414L9 10.414L10.293 11.707L15.293 6.707C15.683 6.317 15.683 5.683 15.293 5.293L10.293 0.293Z" fill="currentColor" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
