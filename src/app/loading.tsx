import { Container } from "@/components/shared/Container";

export default function Loading() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cloud-white border-t-action-blue" />
        </div>
      </Container>
    </div>
  );
}
