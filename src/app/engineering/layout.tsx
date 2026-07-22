import type { ReactNode } from "react";

export default function EngineeringLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        @font-face {
          font-family: "Formula Condensed";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/FormulaCondensed/FormulaCondensed-Light.woff") format("woff");
        }
        @font-face {
          font-family: Graphik;
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Graphik/Graphik-Regular.woff2") format("woff2");
        }
        @font-face {
          font-family: Graphik;
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Graphik/Graphik-Medium.woff2") format("woff2");
        }
        .eng-formula { font-family: "Formula Condensed", sans-serif !important; }
        .eng-graphik { font-family: Graphik, Poppins, sans-serif !important; }
      `}</style>
      {children}
    </>
  );
}
