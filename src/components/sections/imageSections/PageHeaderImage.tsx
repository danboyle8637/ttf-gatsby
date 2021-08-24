import * as React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { HeaderLogo } from "../../content/HeaderLogo";
import { SectionHeaderImage } from "../../images/SectionHeaderImage";

interface HomeHeaderProps {
  mobileImage: IGatsbyImageData;
  aboveMobileImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  mobileImage,
  aboveMobileImage,
  altTag,
  titleTag,
}) => {
  return (
    <>
      <HeaderLogo />
      <SectionHeaderImage
        mobileImage={mobileImage}
        aboveMobileImage={aboveMobileImage}
        altTag={altTag}
        titleTag={titleTag}
      />
    </>
  );
};
