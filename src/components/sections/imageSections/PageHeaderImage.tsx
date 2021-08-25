import * as React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { HeaderLogo } from "../../content/HeaderLogo";
import { SectionHeaderImage } from "../../images/SectionHeaderImage";

interface HomeHeaderProps {
  mobileImage: IGatsbyImageData;
  aboveMobileImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  tagline: string;
}

export const PageHeaderImage: React.FC<HomeHeaderProps> = ({
  mobileImage,
  aboveMobileImage,
  altTag,
  titleTag,
  tagline,
}) => {
  return (
    <>
      <HeaderLogo tagline={tagline} />
      <SectionHeaderImage
        mobileImage={mobileImage}
        aboveMobileImage={aboveMobileImage}
        altTag={altTag}
        titleTag={titleTag}
      />
    </>
  );
};
