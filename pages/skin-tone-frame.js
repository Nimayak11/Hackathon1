import FrameComponent from "../components/frame-component";
import PcosSymptomsContainer from "../components/pcos-symptoms-container";

const SkinToneFrame = () => {
  return (
    <div className="w-full relative bg-darkslategray overflow-hidden flex flex-col items-center justify-start pt-[43px] pb-[21px] pr-[110px] pl-5 box-border tracking-[normal] mq825:pr-[27px] mq825:box-border mq1400:pr-[55px] mq1400:box-border">
      <FrameComponent />
      <section className="w-[1624px] flex flex-row items-start justify-end max-w-full mt-[-6px]">
        <PcosSymptomsContainer />
      </section>
    </div>
  );
};

export default SkinToneFrame;
