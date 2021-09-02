import * as React from "react";
import { graphql } from "gatsby";

import { PageHeaderImage } from "../components/sections/imageSections/PageHeaderImage";
import { HomeHeaderContentSection } from "../components/sections/contentSections/HomeHeaderContent";
import { PostHeadlineImageSection } from "../components/sections/imageSections/PostHeadlineImageSection";
import { CallOutSection } from "../components/sections/CallOutSection";
import { WhoAreWeSection } from "../components/sections/WhoAreWeSection";
import { InStudioWorkoutSection } from "../components/sections/InStudioWorkoutsSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { ClassScheduleSection } from "../components/sections/ClassScheduleSection";
import { OnlineWorkoutsSection } from "../components/sections/OnlineWorkoutsSection";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { GatsbyImage } from "../types/images";
import { Testimonial } from "../types/content";
import { HomePageData } from "../types/pages";
import { Seo } from "../components/content/Seo";

const IndexPage: React.FC<HomePageData> = ({ data }) => {
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
      <main>
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
          tagline="Strength Training for Women"
        />
        <HomeHeaderContentSection />
        <PostHeadlineImageSection />
        <CallOutSection />
        <WhoAreWeSection />
        <TestimonialSection
          headline="Here From Our Badass Ladies..."
          testimonials={data.testimonials.nodes}
        />
        <InStudioWorkoutSection />
        <ClassScheduleSection />
        <OnlineWorkoutsSection />
        <CallToActionSection />
      </main>
    </>
  );
};

export default IndexPage;

export const homeData = graphql`
  query {
    seo: markdownRemark(frontmatter: { title: { eq: "seo-home" } }) {
      frontmatter {
        pageTitle
        description
      }
    }
    socialShareInfo: sanityMarketingPage(headline1: { eq: "Home Page" }) {
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
    headerSection: sanityMarketingPage(headline1: { eq: "Home Page" }) {
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
      filter: { devTitle: { in: ["Amanda R", "Sam", "Tiffany", "Stephanie"] } }
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
