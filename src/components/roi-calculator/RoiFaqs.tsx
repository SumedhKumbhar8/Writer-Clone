import { roiFaqs } from "@/data/roi-faqs";

export function RoiFaqs() {
  return (
    <div className="faqs_section roi-faqs">
      <div className="container-2">
        <h5>FAQ</h5>
        <h2>Frequently-asked questions</h2>
        <div className="raw_faq-container">
          {roiFaqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <div dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
