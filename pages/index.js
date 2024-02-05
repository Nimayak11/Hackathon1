import FrameNav from "../components/frame-nav";
import ResponsiveFrame from "../components/responsive-frame";
import Footer from "../components/footer";

const SapproConcierlpsptest = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[1026px] box-border tracking-[normal]">
      <FrameNav />
      <ResponsiveFrame />
      <Footer />
      <div className="w-[94px] h-14 absolute my-0 mx-[!important] top-[-56px] right-[-94px] overflow-hidden shrink-0" />
    </div>
  );
};

export default SapproConcierlpsptest;
