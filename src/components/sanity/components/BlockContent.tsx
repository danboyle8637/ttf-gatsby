import * as React from "react";
//@ts-ignore
import BC from "@sanity/block-content-to-react";

//@ts-ignore
export const BlockContent = ({ blocks, serializer }) => {
  return (
    <BC className="block-content" blocks={blocks} serializers={serializer} />
  );
};
