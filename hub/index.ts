import { defineExtension } from "@mantle/hub-api";
import { z } from "zod";

const time = () => new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" });

export default defineExtension({
  setup(ctx) {
    // A state the TV part subscribes to with useHub("clock").
    const tick = () => ctx.states.set("hello.clock", time(), {}, { device: true });
    tick();
    ctx.schedule.every(60, tick);
    // An action the TV part calls with useHub("greet", { name }).
    ctx.actions.register(
      "hello.greet",
      { input: z.object({ name: z.string().max(40).optional() }), role: "member", device: true, description: "Grüßt ein Gerät" },
      ({ name }, call) => ({ text: `${ctx.settings.get<{ greeting: string }>().greeting} ${name ?? "TV"}`, device: call.deviceId ?? null }),
    );
    ctx.contribute("sidebar.panel", { id: "hello", title: "Hallo", icon: "Extension", path: "/p/hello/main", role: "member" });
  },
});
