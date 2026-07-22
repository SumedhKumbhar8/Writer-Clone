import Image from "next/image";
import { CONNECTOR_ITEMS } from "@/data/connectors";
import type { ConnectorItem } from "@/data/connectors";

function ConnectorCard({ item, featured }: { item: ConnectorItem; featured?: boolean }) {
  return (
    <div className="connectors__showcase-card">
      <div>
        {featured && (
          <p className="connectors__showcase-feature">Featured</p>
        )}

        <div className="connectors__showcase-c-content">
          <figure className="wp-block-image size-large is-resized">
            <Image
              src={item.icon}
              alt={`${item.name} logo`}
              width={featured ? 100 : 50}
              height={featured ? 100 : 50}
              title="connectors__showcase-icon"
            />
          </figure>

          <h4 id={`h-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.name}
          </h4>

          <p>{item.description}</p>

          <h6 id={`h-${item.category.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.category}
          </h6>
        </div>
      </div>

      {featured && item.featuredImage && (
        <figure className="wp-block-image size-large">
          <Image
            src={item.featuredImage}
            alt=""
            width={739}
            height={424}
            sizes="739px"
          />
        </figure>
      )}
    </div>
  );
}

export function ConnectorsShowcase() {
  const featured = CONNECTOR_ITEMS.find((item) => item.featured);
  const regular = CONNECTOR_ITEMS.filter((item) => !item.featured);

  return (
    <section className="connectors__showcase-section">
      <div className="container-default-sm">
        <div className="connectors__showcase-title">
          <p>CONNECTOR SHOWCASE</p>
          <h2 id="h-connect-writer-to-the-tools-your-teams-use-most">
            Connect WRITER to the tools your
            <br />
            teams use most
          </h2>
        </div>

        <div className="connectors__showcase-grid">
          {featured && (
            <div>
              <ConnectorCard item={featured} featured />
            </div>
          )}

          {regular.map((item) => (
            <div key={item.name}>
              <ConnectorCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
