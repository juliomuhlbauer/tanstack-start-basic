import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/meta/page")({
  component: RouteComponent,
  head: ({ matches }) => {
    console.log(matches);

    const match = matches[0];

    console.log(match);

    const meta = match.meta;

    console.log(meta);

    return {
      meta: [
        {
          // title: `Page - ${meta.title}`,
          title: "Page",
        },
      ],
    };
  },
});

function RouteComponent() {
  return <div>Hello "/meta/page"!</div>;
}
