import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/file")({
  component: RouteComponent,
  loader: async () => {
    const file = await Bun.file("src/data/file.json", {
      type: "application/json",
    }).text();

    return { json: JSON.parse(file) };
  },
});

function RouteComponent() {
  const { json } = Route.useLoaderData();

  return <div>{JSON.stringify(json, null, 2)}</div>;
}
