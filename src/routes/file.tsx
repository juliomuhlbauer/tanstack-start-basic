import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/file")({
  component: RouteComponent,
  loader: async () => {
    const json = await Bun.file("src/data/file.json", {
      type: "application/json",
    }).text();

    return { json };
  },
});

function RouteComponent() {
  return <div>Hello "/file"!</div>;
}
