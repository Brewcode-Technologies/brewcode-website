// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { CaseStudy } from "./types";

// interface CaseStudyCardProps {
//   study: CaseStudy;
//   getClassName: (size: "small" | "medium" | "large") => string;
// }

// const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, getClassName }) => {
//   const router = useRouter();

//   const handleButtonClick = (buttonUrl: string) => {
//     router.push(buttonUrl);
//   };

//   return (
//     <div key={study.id} className="row case-study-card" style={{ margin: "80px 0px" }}>
//       <div className="case-studies-icon col-md-5 d-flex flex-column">
//         <Image
//           src={study.imageUrl}
//           alt={study.title}
//           className={`${getClassName(study.size)} case-study-image mb-4`}
//           width={100}
//           height={100}
//           loading="lazy"
//         />
//         <h3 className="soctor-heading">{study.title}</h3>
//         <p className="soctor-description">{study.description}</p>
//         <button className="health-care-button">{study.buttonText}</button>
//         <button
//           className="view-detais-sotry-button mb-4"
//           onClick={() => handleButtonClick(study.buttonUrl)}
//         >
//           VIEW DETAILED STORY
//         </button>
//       </div>
//       <div className="col-md-7 d-flex">
//         <div className="image-container">
//           <Image
//             src={study.colImageUrl}
//             alt={study.colImageName}
//             width={300}
//             height={300}
//             className="health-care-img"
//             loading="lazy"
//           />
//           <div className="top-left-text min-2-read">{study.read}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyCard;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  read: string;
  colImageUrl: string;
  colImageName: string;
  size: "small" | "medium" | "large";
}

interface CaseStudyCardProps {
  study: CaseStudy;
  getClassName: (size: "small" | "medium" | "large") => string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, getClassName }) => {
  const router = useRouter();

  const handleButtonClick = (buttonUrl: string) => {
    router.push(buttonUrl);
  };

  return (
    <div key={study.id} className="row case-study-card" style={{ margin: "80px 0px" }}>
      <div className=" col-md-5 d-flex flex-column">
        <div className="case-studies-icon-container">
        <Image
          src={study.imageUrl}
          alt={study.title}
          className={`${getClassName(study.size)}  mb-4`}
          width={0}
          height={0}
          loading="lazy"
          sizes="100vw"
         
        />
        </div>
     
        <h3 className="soctor-heading">{study.title}</h3>
        <p className="soctor-description">{study.description}</p>
      
        <button className="health-care-button">{study.buttonText}</button>
    
        <button
          className="view-detais-sotry-button mb-4"
          onClick={() => handleButtonClick(study.buttonUrl)}
        >
          VIEW DETAILED STORY
        </button>
      </div>
      <div className="col-md-7 d-flex">
        <div className="image-container">
          <Image
            src={study.colImageUrl}
            alt={study.colImageName}
            width={0}
            height={0}
            className="health-care-img"
            loading="lazy"
            sizes="100vw"
            style={{objectFit:'fill'}}

          />
          <div className="top-left-text min-2-read">{study.read}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
