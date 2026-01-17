"use client";
import localFont from "next/font/local";
export const Inter = localFont({
  src: "../fonts/inter/static/Inter_18pt-Regular.ttf",
  variable: "--font-inter",
});

export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

import Image from "next/image";
import stars from "../../public/caseStudies/stars.svg";
import user from "../../public/caseStudies/user.svg";
const CaseStudies = () => {
  const reviews = [
    {
      id: 1,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 2,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 3,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 4,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 5,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 6,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 7,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
  ];
  return (
    <>
      <div className="bg-[#03302E] min-h-[816px]">
        {/* reviews */}

        <div className="flex gap-8">
          {/* review */}
          {reviews.map((review) => (
            <div className="w-[283px] backdrop-blur-[35.3px] bg-[#0C403F] flex flex-col gap-4 px-6 py-4 roounded-[11.3px] border-[0.71px] border-[#0C403F]">
              {/* comment */}
              <div className="flex flex-col gap-2 ">
                <Image src={stars} alt="stars" width={72} height={12} />
                <h1
                  className={`${Inter.className} font-normal text-[11.19px] text-[#FBFBFB] italic`}
                >
                  {review.comment}
                </h1>
              </div>
              {/* center line */}
              <div className="w-[221px] border-[0.71px] border-[#FFFFFF1A]"></div>
              {/* user */}
              <div className="flex gap-2">
                <Image src={review.img} alt="user" width={26} height={26} />
                <div className="flex flex-col gap-1">
                  <h1
                    className={`${Satoshi.className} font-bold text-[9.53px] text-[#FFFFFF]`}
                  >
                    {review.name}
                  </h1>
                  <p
                    className={`${Inter.className} font-normal text-[7.53px] text-[#FBFBFB]`}
                  >
                    {review.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CaseStudies;
