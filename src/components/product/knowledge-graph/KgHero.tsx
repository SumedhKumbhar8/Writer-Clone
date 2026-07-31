import Link from "next/link";

export function KgHero() {
  return (
    <>
      <div className="dc-content mb-2">
        <div className="head">KNOWLEDGE GRAPH</div>
      </div>

      <div className="section-knowledge-graph-main__content">
        <div className="col-12 px-0 col-xl-9 mx-auto">
          <h1
            className="wp-block-heading"
            id="h-an-innovative-approach-to-knowledge-retrieval"
          >
            An innovative approach to knowledge retrieval
          </h1>
        </div>

        <div className="col-12 px-0 col-xl-10 mx-auto">
          <p className="mb-1">
            Knowledge Graph, our graph-based retrieval-augmented generation
            (RAG), achieves higher accuracy than traditional RAG approaches that
            use vector retrieval.
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-auto mt-4">
            <Link
              href="https://go.writer.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="dc-btn dc-btn_outline-white px-lg-4 dc-btn_lg"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
