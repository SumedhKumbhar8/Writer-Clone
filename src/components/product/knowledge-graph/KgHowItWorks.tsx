import Image from "next/image";
import Link from "next/link";

const HOW_IT_WORKS_DATA = [
  {
    step: "1",
    title: "Richer semantic understanding",
    description:
      "Knowledge Graph draws on a specialized LLM that\u2019s trained to process data at scale and build valuable semantic relationships between data points. It stores data in a cost-effective, easy-to-update graph structure.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-1.png",
    alternativeDescription:
      "By converting data into vector embeddings, traditional RAG can only define similarity by distance between data points but has no context on their semantic relationships. Vector databases are also difficult and costly to maintain and update.",
  },
  {
    step: "2",
    title: "Accurate retrieval methodology",
    description:
      "Because graph structures retain semantic relationships, Knowledge Graph accurately retrieves relevant data for each query. Our retrieval-aware compression technique condenses data and indexes it with metadata, which gives it rich context.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-2.png",
    alternativeDescription:
      "Traditional RAG converts the query into a vector embedding and uses a rough algorithm to find the closest data points to the query, without any understanding of the relationship between the data points. When data is dense, this method fails to return the most relevant data consistently.",
  },
  {
    step: "3",
    title: "State-of-the-art LLMs",
    description:
      "To generate a response, Knowledge Graph sends relevant data to our Palmyra LLMs, which are top-ranked and trained with 1 trillion tokens of quality data. We apply advanced techniques to enhance performance and minimize hallucinations.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-3.png",
    alternativeDescription:
      "The quality of the answer depends on the quality of the retrieval, and the level of hallucination depends on the quality of the underlying LLM and the techniques you employ.",
  },
] as const;

export function KgHowItWorks() {
  return (
    <>
      <div className="dc-content text-center mt-5 mt-md-7 knowledge-hiw-head">
        <div className="head">HOW IT WORKS</div>
      </div>

      <div className="knowledge-hiw-row-wrap">
        {HOW_IT_WORKS_DATA.map((item) => (
          <div key={item.step} className="knowledge-hiw-row">
            <div className="knowledge-hiw-col-l">
              <figure className="wp-block-image size-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1120}
                  height={829}
                  className="h-auto w-full"
                  sizes="(max-width: 1080px) 100vw, 560px"
                />
              </figure>
            </div>

            <div className="knowledge-hiw-col-r d-flex flex-column flex-nowrap align-items-start">
              <div className="knowledge-hiw-col-r__val">{item.step}</div>

              <div className="knowledge-hiw-col-r__content">
                <h3 className="wp-block-heading">{item.title}</h3>
                <p className="wp-block-paragraph">{item.description}</p>
              </div>

              <div className="knowledge-hiw-col-r__tooltip-wrap">
                <a className="sf_simple_link knowledge-hiw-col-r__btn" href="#">
                  What{"\u2019"}s the alternative approach?
                </a>
                <div className="knowledge-hiw-col-r__tooltip-content">
                  <p>
                    <strong>The alternative approach</strong>
                  </p>
                  <p>{item.alternativeDescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center knowledge-hiw-footer">
        <p>
          Want to learn more about the limitations of RAG approaches that uses
          vector retrieval?
        </p>
        <Link
          href="https://writer.com/blog/vector-based-retrieval-limitations-rag/"
          className="dc-btn dc-btn_dark-200"
        >
          Read the blog post
        </Link>
      </div>
    </>
  );
}
