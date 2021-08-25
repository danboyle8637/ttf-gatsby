import React from "react";
import { Layout } from "./src/components/Layout/BaseLayout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

const HtmlAttributes = {
  lang: "en",
};

export const onRenderBody = (
  { setHtmlAttributes, setPostBodyComponents },
  pluginOptions
) => {
  setHtmlAttributes(HtmlAttributes);
  setPostBodyComponents([<div key="portal1" id="portal" />]);
};
