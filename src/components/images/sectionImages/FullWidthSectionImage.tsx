// import * as React from "react";
// import styled from "styled-components";
// import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

// import { ImageOverlay } from "../../../styles/images";

// interface AboveMobileSectionImageProps {
//   imageData: IGatsbyImageData;
//   altTag: string;
//   titleTag: string;
// }

// const ImageContainer = styled.div`
//   grid-column: 1 / -1;
//   grid-row: 1 / -1;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
//   border-radius: 20px;
//   width: 100%;
//   max-width: 1440px;
//   transform: var(--image-translate);
//   overflow: hidden;
// `;

// const Image = styled.div`
//   grid-column: 1 / -1;
//   grid-row: 1 / -1;
// `;

// export const FullWidthSectionImage: React.FC<AboveMobileSectionImageProps> = ({
//   imageData,
//   altTag,
//   titleTag,
// }) => {
//   return (
//     <ImageContainer>
//       <Image>
//         <GatsbyImage image={imageData} alt={altTag} title={titleTag} />
//       </Image>
//       <ImageOverlay />
//     </ImageContainer>
//   );
// };
