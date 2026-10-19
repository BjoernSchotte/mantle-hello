import { PageTitle, Section, useLive } from "@mantle/hub-web";
import { Typography } from "@mui/material";
import { useState } from "react";

function Main() {
  const [clock, setClock] = useState<string | null>(null);
  useLive<{ id: string; state: unknown }>("states", (s) => {
    if (s.id === "hello.clock") setClock(String(s.state));
  });
  return (
    <>
      <PageTitle>Hallo aus dem Store</PageTitle>
      <Section title="Hub-Uhr">
        <Typography>{clock ?? "wartet auf die nächste Minute"}</Typography>
      </Section>
    </>
  );
}

export default { panels: { main: Main } };
