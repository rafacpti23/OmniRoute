import type { Metadata } from "next";
import { Suspense } from "react";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "Area do Cliente | Easy IA",
  description:
    "Portal do cliente com API key, consumo, financeiro, renovacao, recarga e playground.",
};

export default function PortalPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-secondary">Carregando portal...</div>}>
      <PortalClient />
    </Suspense>
  );
}
