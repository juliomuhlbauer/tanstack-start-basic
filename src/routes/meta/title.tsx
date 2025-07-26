import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/meta/title")({
  component: RouteComponent,
  head: ({ matches }) => {
    console.log("All matches:", matches);

    const match = matches[0];

    console.log("First match:", match);

    const meta = match.meta;

    console.log("First match meta:", meta);

    return {
      meta: [
        {
          // @ts-ignore
          title: `Page - ${meta.title}`,
        },
      ],
    };
  },
});

function RouteComponent() {
  return <div>Hello "/meta/title"!</div>;
}
