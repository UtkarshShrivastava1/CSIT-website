import { useEffect, useRef } from "react";
import Wipro from "../../assets/CompaniesVisited/Wipro.png";
import Accenture from "../../assets/CompaniesVisited/Accenture.png";
import Infosys from "../../assets/CompaniesVisited/Infosys.png";
import TataTechnologies from "../../assets/CompaniesVisited/TataTechnologies.png";
import A from "../../assets/CompaniesVisited/A.jpg";
import B from "../../assets/CompaniesVisited/B.jpg";
import C from "../../assets/CompaniesVisited/C.jpg";
import D from "../../assets/CompaniesVisited/D.jpg";
import E from "../../assets/CompaniesVisited/E.jpg";
import F from "../../assets/CompaniesVisited/F.jpg";
import G from "../../assets/CompaniesVisited/G.jpg";
import H from "../../assets/CompaniesVisited/H.jpg";
import I from "../../assets/CompaniesVisited/I.jpg";
import J from "../../assets/CompaniesVisited/J.jpg";
import K from "../../assets/CompaniesVisited/K.jpg";
import L from "../../assets/CompaniesVisited/L.jpg";
import M from "../../assets/CompaniesVisited/M.jpg";
import N from "../../assets/CompaniesVisited/N.jpg";
import O from "../../assets/CompaniesVisited/O.jpg";
import P from "../../assets/CompaniesVisited/P.jpg";
import Q from "../../assets/CompaniesVisited/Q.jpg";
import R from "../../assets/CompaniesVisited/R.jpg";
import S from "../../assets/CompaniesVisited/S.jpg";
import T from "../../assets/CompaniesVisited/T.jpg";
import U from "../../assets/CompaniesVisited/U.jpg";
import V from "../../assets/CompaniesVisited/V.jpg";
import W from "../../assets/CompaniesVisited/W.jpg";
import X from "../../assets/CompaniesVisited/X.jpg";
import Y from "../../assets/CompaniesVisited/Y.jpg";
import Z from "../../assets/CompaniesVisited/Z.jpg";
import ZA from "../../assets/CompaniesVisited/ZA.jpg";
import ZB from "../../assets/CompaniesVisited/ZB.jpg";
import ZC from "../../assets/CompaniesVisited/ZC.jpg";
import ZD from "../../assets/CompaniesVisited/ZD.jpg";
import ZE from "../../assets/CompaniesVisited/ZE.jpg";
import ZF from "../../assets/CompaniesVisited/ZF.jpg";
import ZG from "../../assets/CompaniesVisited/ZG.jpg";
import ZH from "../../assets/CompaniesVisited/ZH.jpg";
import ZI from "../../assets/CompaniesVisited/ZI.jpg";
import ZJ from "../../assets/CompaniesVisited/ZJ.jpg";
import ZK from "../../assets/CompaniesVisited/ZK.jpg";
import ZL from "../../assets/CompaniesVisited/ZL.jpg";
import ZM from "../../assets/CompaniesVisited/ZM.jpg";
import ZN from "../../assets/CompaniesVisited/ZN.jpg";
import ZO from "../../assets/CompaniesVisited/ZO.jpg";
import ZP from "../../assets/CompaniesVisited/ZP.jpg";
import ZQ from "../../assets/CompaniesVisited/ZQ.jpg";
import ZR from "../../assets/CompaniesVisited/ZR.jpg";
import ZS from "../../assets/CompaniesVisited/ZS.jpg";
import ZT from "../../assets/CompaniesVisited/ZT.jpg";
import ZU from "../../assets/CompaniesVisited/ZU.jpg";
import ZV from "../../assets/CompaniesVisited/ZV.jpg";
import ZW from "../../assets/CompaniesVisited/ZW.jpg";
import ZX from "../../assets/CompaniesVisited/ZX.jpg";
import ZY from "../../assets/CompaniesVisited/ZY.jpg";
import ZZ from "../../assets/CompaniesVisited/ZZ.jpg";
import ZZA from "../../assets/CompaniesVisited/ZZA.jpg";
import ZZB from "../../assets/CompaniesVisited/ZZB.jpg";


const CompaniesVisited = () => {
  // References for both logo containers
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Updated companies data with imported images
  const companies = [
    {
      name: "Wipro",
      logo: Wipro,
    },
    {
      name: "Accenture",
      logo: Accenture,
    },
    {
      name: "Infosys",
      logo: Infosys,
    },
    {
      name: "Tata Technologies",
      logo: TataTechnologies,
    },
    {
      name: "Wipro",
      logo: Wipro,
    },
    {
      name: "Accenture",
      logo: Accenture,
    },
    {
      name: "Infosys",
      logo: Infosys,
    },
    {
      name: "Tata Technologies",
      logo: TataTechnologies,
    },
    {
      name: "EDAG",
      logo: A,
    },
    {
      name: "Must",
      logo: B,
    },
    {
      name: "Triveni",
      logo: C,
    },
    {
      name: "Parkar",
      logo: D,
    },
    {
      name: "OTL",
      logo: E,
    },
    {
      name: "Mahindra",
      logo: F,
    },
    {
      name: "ZYCUS",
      logo: G,
    },
    {
      name: "AMAZON",
      logo: H,
    },
    {
      name: "ETECH",
      logo: I,
    },
    {
      name: "GENPACT",
      logo: J,
    },
    {
      name: "COLLEBERA",
      logo: K,
    },
    {
      name: "ALLERIN",
      logo: L,
    },
    {
      name: "IBM",
      logo: M,
    },
    {
      name: "JUSTPAY",
      logo: N,
    },
    {
      name: "KIPT",
      logo: O,
    },
    {
      name: "TCS",
      logo: P,
    },
    {
      name: "CAPGEMINI",
      logo: Q,
    },
    {
      name: "EXCELLON",
      logo: R,
    },
    {
      name: "GLOBLA LOISTIC",
      logo: S,
    },
    {
      name: "BOSH",
      logo: T,
    },
    {
      name: "NEOC",
      logo: U,
    },
    {
      name: "EROS",
      logo: V,
    },
    {
      name: "OPTRA",
      logo: W,
    },
    {
      name: "FUJITS",
      logo: X,
    },
    {
      name: "ECELX",
      logo: Y,
    },
    {
      name: "VIT",
      logo: Z,
    },
    {
      name: "DIASPARK",
      logo: ZA,
    },
    {
      name: "INNOEYE",
      logo: ZB,
    },
    {
      name: "WEBDUNIYA",
      logo: ZC,
    },
    {
      name: "HEXWARE",
      logo: ZD,
    },
    {
      name: "PARAMATRIX",
      logo: ZE,
    },
    {
      name: "HCL",
      logo: ZF,
    },
    {
      name: "HCL",
      logo: ZG,
    },
    {
      name: "HCL",
      logo: ZH
    },
    {
      name: "HCL",
      logo: ZI,
    },
    {
      name: "HCL",
      logo: ZJ,
    },
    {
      name: "HCL",
      logo: ZK,
    },
    {
      name: "HCL",
      logo: ZL,
    },
    {
      name: "HCL",
      logo: ZM,
    },
    {
      name: "HCL", 
      logo: ZN,
    },
    {
      name: "HCL",
      logo: ZO,
    },
    {
      name: "HCL",
      logo: ZP,
    },
    {
      name: "HCL",
      logo: ZQ,
    },
    {
      name: "HCL",
      logo: ZR,
    },
    {
      name: "HCL",
      logo: ZS,
    },
    {
      name: "HCL",
      logo: ZT,
    },
    {
      name: "HCL",
      logo: ZU,
    },
    {
      name: "HCL",
      logo: ZV,
    },
    {
      name: "HCL",
      logo: ZW,
    },
    {
      name: "HCL",
      logo: ZX,
    },
    {
      name: "HCL",
      logo: ZY,
    },
    {
      name: "HCL",
      logo: ZZ,
    },
    {
      name: "HCL",
      logo: ZZA,
    },
    {
      name: "HCL",
      logo: ZZB,
    },

    




  ];

  // Create a truly seamless animation effect
  useEffect(() => {
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animateScroll = () => {
      if (!firstRowRef.current || !secondRowRef.current) return;

      scrollPosition += scrollSpeed;

      // This is the critical part for seamless scrolling:
      // When first row is completely scrolled out of view, reset position
      if (scrollPosition >= firstRowRef.current.offsetWidth) {
        scrollPosition = 0;
      }

      // Move both rows at the same speed and position
      firstRowRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      secondRowRef.current.style.transform = `translateX(-${scrollPosition}px)`;

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-white py-16 text-[#0d173b]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Companies Visited
        </h2>
        <div className="h-1 w-24 bg-[#0d173b] mx-auto mb-8"></div>
        <p className="text-center text-[#0d173b] mb-12 max-w-3xl mx-auto">
          Our students have been placed in leading organizations across various
          industries. Here are some of the companies that have visited our
          campus:
        </p>

        {/* Logo Carousel Container */}
        <div
          className="relative overflow-hidden bg-white py-8 rounded-lg shadow-lg"
          ref={containerRef}
        >
          <div className="flex" style={{ width: "max-content" }}>
            {/* First set of logos */}
            <div className="flex" ref={firstRowRef}>
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-4 mx-4 min-w-40 h-28 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second set of logos (exact duplicate positioned right after the first set) */}
            <div className="flex" ref={secondRowRef}>
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-4 mx-4 min-w-40 h-28 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesVisited;
