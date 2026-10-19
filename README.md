# Beispiel-Erweiterung „Hallo“

Alle drei Teile einer Mantle-Erweiterung (`specs/mantle/hub.md` §5.2):

- `hub/index.ts`: Zustand `hello.clock` (jede Minute) und Aktion `hello.greet`, beide für Geräte freigegeben.
- `web/index.tsx`: Panel „Hallo“ im Hub, lädt zur Laufzeit über die Import Map.
- `src/clock.tsx`: Kachel am TV, die `hello.clock` per `useHub` live anzeigt.

`mantle pack .` baut `dist/extension.zip` mit Prüfsumme; als GitHub-Release `v<version>` mit
`extension.zip` und `extension.zip.sha256` lässt es sich im Hub unter Erweiterungen → Store installieren.
Während der Entwicklung: `MANTLE_HUB_TOKEN=… mantle dev . --hub https://… --device Streamer`.
