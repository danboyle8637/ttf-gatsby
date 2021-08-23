import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionHeaderImage } from "../../images/SectionHeaderImage";
import { Headline } from "./Headline";
import { HeaderImage } from "../../../types/images";

export const InStudioWorkoutSection = () => {
  const data: HeaderImage = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "small-group-training-720x720.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      aboveMobileImage: file(
        relativePath: { eq: "small-group-training-1440x700.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      headline: markdownRemark(
        frontmatter: { title: { eq: "in-studio-group-training" } }
      ) {
        frontmatter {
          headline1
          headline2
        }
      }
    }
  `);

  return (
    <>
      <Headline
        headline1={data.headline.frontmatter.headline1}
        headline2={data.headline.frontmatter.headline2}
      />
      <SectionHeaderImage
        mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
        aboveMobileImage={data.aboveMobileImage.childImageSharp.gatsbyImageData}
        altTag="Group of members doing step ups on a box"
        titleTag="Steps Ups On a Box"
      />
    </>
  );
};
