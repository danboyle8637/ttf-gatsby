import * as React from "react";
import styled from "styled-components";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { BlogPostHeader } from "./BlogPostHeader";
import { BlockContent } from "../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../sanity/components/Serializer";
import { CallToActionSection } from "../../sections/CallToActionSection";

interface PostTemplateProps {
  featureImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  headline: string;
  postCopy: [];
}

const SectionContainer = styled.main`
  padding: 80px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.section`
  width: 100%;
  max-width: 800px;
`;

export const PostTemplate: React.FC<PostTemplateProps> = ({
  featureImage,
  altTag,
  titleTag,
  headline,
  postCopy,
}) => {
  return (
    <SectionContainer>
      <BlogPostHeader
        featureImage={featureImage}
        altTag={altTag}
        titleTag={titleTag}
        headline={headline}
      />
      <ContentContainer>
        <BlockContent blocks={postCopy} serializer={blockContentSerializer} />
      </ContentContainer>
      <CallToActionSection />
    </SectionContainer>
  );
};
