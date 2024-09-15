import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. Why Artificial Intelligence?</SubTit>
          Although my background is in <PointText>Aerospace Engineering</PointText>,
          I recognized an exciting opportunity to integrate Artificial Intelligence into my expertise.<br />
          This led me to develop a deep fascination with advanced technologies and the possibilities they offer.<br />
          I thrive on exploring <PointText>new technologies</PointText> because they inspire and energize me, and I see immense potential for innovation. <br />
          Moreover, I am eager to be at the <PointText>forefront of creating groundbreaking ideas</PointText> that shape how people interact with technology.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. What strengths can you bring?</SubTit>
          In addition to my strong <PointText>communication skills</PointText>, 
          I bring a <PointText>creative mindset</PointText> that can drive business growth and
          a <PointText>cost-conscious</PointText> approach <br /> that ensures efficient and effective user experiences.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;