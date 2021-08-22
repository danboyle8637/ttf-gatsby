import React from "react";
import { Layout } from "./src/components/Layout/BaseLayout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
