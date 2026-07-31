type PlansHeroProps = {
  title: string;
  description: string;
};

export function PlansHero({ title, description }: PlansHeroProps) {
  return (
    <div className="pricing_page_title mx-auto w-full max-w-[945px] text-center">
      <h1 className="m-0 mb-5 text-[64px] font-normal leading-none text-midnight-graphite">
        {title}
      </h1>
      <p className="my-4 text-[16px] font-normal leading-normal text-midnight-graphite">
        {description}
      </p>
    </div>
  );
}
