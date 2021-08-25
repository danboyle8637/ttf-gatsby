import * as React from "react";
import { graphql } from "gatsby";

import { PageHeaderImage } from "../components/sections/imageSections/PageHeaderImage";
import { HomeHeaderContentSection } from "../components/sections/contentSections/HomeHeaderContent";
import { PostHeadlineImageSection } from "../components/sections/imageSections/PostHeadlineImageSection";
import { CallOutSection } from "../components/sections/CallOutSection";
import { InStudioWorkoutSection } from "../components/sections/InStudioWorkoutsSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { GatsbyImage } from "../types/images";
import { Testimonial } from "../types/content";

interface HomeData {
  data: {
    mobileHeaderImage: GatsbyImage;
    aboveMobileHeaderImage: GatsbyImage;
    testimonials1: { nodes: Testimonial[] };
  };
}

const IndexPage: React.FC<HomeData> = ({ data }) => {
  return (
    <main>
      <PageHeaderImage
        mobileImage={data.mobileHeaderImage.childImageSharp.gatsbyImageData}
        aboveMobileImage={
          data.aboveMobileHeaderImage.childImageSharp.gatsbyImageData
        }
        altTag="Group of women flexing after a tough workout"
        titleTag="This Time Fitness"
        tagline="Strength Training for Women"
      />
      <HomeHeaderContentSection />
      <PostHeadlineImageSection />
      <CallOutSection />
      <InStudioWorkoutSection />
      <TestimonialSection testimonials={data.testimonials1.nodes} />
    </main>
  );
};

export default IndexPage;

export const homeData = graphql`
  query {
    mobileHeaderImage: file(
      relativePath: { eq: "ttf-group-flex-600x600.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    aboveMobileHeaderImage: file(
      relativePath: { eq: "ttf-group-flex-1440x700.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    testimonials1: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "testimonial-batch-1" } } }
    ) {
      nodes {
        id
        html
        frontmatter {
          headline
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
