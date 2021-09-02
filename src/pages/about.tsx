import * as React from "react";
import { graphql } from "gatsby";

import { PageHeaderImage } from "../components/sections/imageSections/PageHeaderImage";
import { ContentSection } from "../components/sections/About/IntroSection/ContentSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { KindalSection } from "../components/sections/About/KindalSection";
import { DanSection } from "../components/sections/About/DanSection";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Seo } from "../components/content/Seo";
import { AboutPageData } from "../types/pages";

const AboutPage: React.FC<AboutPageData> = ({ data }) => {
  return (
    <>
      <Seo
        title={data.seo.frontmatter.pageTitle}
        description={data.seo.frontmatter.description}
        socialHeadline={data.socialShareInfo.socialShareInformation.headline1}
        socialDescription={
          data.socialShareInfo.socialShareInformation.description1
        }
        socialImage={
          data.socialShareInfo.socialShareInformation.standardImage1.asset.url
        }
        socialSlug={data.socialShareInfo.socialShareInformation.string1.current}
      />
      <PageHeaderImage
        mobileImage={
          data.headerSection.backgroundImage1.mobileImage.string1.asset
            .gatsbyImageData
        }
        aboveMobileImage={
          data.headerSection.backgroundImage1.laptopImage.string1.asset
            .gatsbyImageData
        }
        altTag={data.headerSection.backgroundImage1.string2}
        titleTag={data.headerSection.backgroundImage1.string1}
        tagline="Who Is This Time Fitness?"
      />
      <ContentSection />
      <TestimonialSection
        headline="Here's What Our Community Is Saying..."
        testimonials={data.testimonials.nodes}
      />
      <KindalSection />
      <DanSection />
      <CallToActionSection />
    </>
  );
};

export default AboutPage;

export const aboutData = graphql`
  query {
    seo: markdownRemark(frontmatter: { title: { eq: "seo-about" } }) {
      frontmatter {
        pageTitle
        description
      }
    }
    socialShareInfo: sanityMarketingPage(headline1: { eq: "About Page" }) {
      socialShareInformation {
        headline1
        string1 {
          current
        }
        description1
        standardImage1 {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
    headerSection: sanityMarketingPage(headline1: { eq: "About Page" }) {
      backgroundImage1 {
        string1
        string2
        mobileImage {
          string1 {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
        laptopImage {
          string1 {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
    testimonials: allSanityTestimonialCard(
      filter: { devTitle: { in: ["Brittany", "Jessie", "Carol", "Sarah"] } }
    ) {
      nodes {
        customerName
        customerLocation
        testimonialHeadline
        _rawTestimonialBody
        customerPicture {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
