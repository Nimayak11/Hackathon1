import { useCallback } from "react";
import { useRouter } from "next/router";

const ResponsiveFrame = () => {
  const router = useRouter();

  const onLinkContainerClick = useCallback(() => {
    router.push("/frame-parent");
  }, [router]);

  const onLinkContainer2Click = useCallback(() => {
    router.push("/form-container");
  }, [router]);

  const onLinkContainer3Click = useCallback(() => {
    router.push("/skin-tone-frame");
  }, [router]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-full text-center text-77xl text-white font-molengo">
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-center py-[89px] px-[3px] box-border gap-[64px_85px] bg-[url('/section@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[1080px] max-w-full mq450:gap-[64px_85px] mq900:gap-[64px_85px] mq900:pt-[38px] mq900:pb-[38px] mq900:box-border mq1325:pt-[58px] mq1325:pb-[58px] mq1325:box-border"
        data-scroll-to="sectionContainer"
      >
        <h1 className="m-0 h-[61px] w-[450px] relative text-inherit [text-decoration:underline] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full pl-5 pr-5 mq450:text-10xl mq900:text-29xl">
          About Us
        </h1>
        <div className="w-[1419px] bg-whitesmoke-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-center py-[110px] pr-[41px] pl-[42px] min-h-[797px] max-w-full text-left text-13xl text-black font-merge-one border-[1px] border-solid border-whitesmoke-400 mq1700:w-[calc(100%_-_40px)] mq900:pt-[71px] mq900:pb-[71px] mq900:box-border mq1325:pl-[21px] mq1325:box-border">
          <div className="h-[797px] w-[1419px] relative bg-whitesmoke-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-400" />
          <h1 className="m-0 h-[519px] flex-1 relative text-inherit font-normal font-inherit flex items-center max-w-full z-[1] mq450:text-lgi mq900:text-7xl">
            <span>
              <p className="m-0">{`We are a team of 4 people who are on a venture to help girls navigate their menstrual health. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`Our team is committed to breaking barriers and fostering awareness about menstrual health! As passionate advocates for women's well-being, we are embarking on a transformative journey to develop a website that aims to empower teenage girls and women with vital information on menstrual health. Our mission is to destigmatize the conversation, provide educational resources, and create a supportive community. Through engaging content, reliable information, and interactive features, we aspire to bridge the knowledge gap and promote a positive and informed approach to menstrual health. `}</p>
            </span>
          </h1>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-start py-[156px] pr-[63px] pl-5 box-border gap-[100px_91px] bg-[url('/section1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mt-[-59px] font-mukta-malar mq450:gap-[100px_91px] mq900:gap-[100px_91px] mq900:pb-[66px] mq900:box-border mq1325:pr-[31px] mq1325:pb-[101px] mq1325:box-border"
        data-scroll-to="sectionContainer1"
      >
        <div className="w-[1335px] flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full">
          <h1 className="m-0 h-[302px] flex-1 relative text-inherit [text-decoration:underline] font-normal font-inherit flex items-center justify-center max-w-full mq450:text-10xl mq900:text-29xl">
            Our Services
          </h1>
        </div>
        <div className="w-[1574px] flex flex-row items-start justify-between gap-[20px] max-w-full text-xl text-black font-poppins mq1325:flex-wrap mq1325:justify-center">
          <div className="w-[395px] flex flex-col items-start justify-start py-0 pr-7 pl-0 box-border max-w-full">
            <div className="self-stretch rounded-3xl bg-whitesmoke-400 flex flex-col items-center justify-start pt-1.5 pb-[21px] pr-5 pl-[21px] gap-[10px] border-[1px] border-solid border-whitesmoke-400">
              <div className="w-[189px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border">
                <img
                  className="h-[167px] flex-1 relative rounded-77xl max-w-full overflow-hidden object-cover"
                  loading="eager"
                  alt=""
                  src="/yogapng@2x.png"
                />
              </div>
              <div className="w-[190px] flex flex-col items-center justify-start gap-[15px]">
                <b className="self-stretch h-[39px] relative flex items-center justify-center shrink-0 mq450:text-base">
                  Exercise
                </b>
                <div
                  className="w-[181px] rounded-lg bg-white box-border flex flex-row items-center justify-center pt-[9px] pb-[11px] pr-2 pl-[7px] whitespace-nowrap cursor-pointer text-5xl border-[1px] border-solid border-black"
                  onClick={onLinkContainerClick}
                >
                  <div className="flex-1 relative">Let's Explore</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[391px] rounded-3xl bg-whitesmoke-400 box-border flex flex-col items-center justify-start pt-1.5 pb-[21px] pr-[61px] pl-[76px] gap-[10px] max-w-full border-[1px] border-solid border-whitesmoke-400 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[222px] flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border">
              <img
                className="h-[167px] flex-1 relative rounded-77xl max-w-full overflow-hidden object-cover"
                loading="eager"
                alt=""
                src="/yogapng-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
              <b className="self-stretch h-[39px] relative flex items-center justify-center shrink-0 mq450:text-base">
                Personalized advice
              </b>
              <div className="w-[197px] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border text-5xl">
                <div
                  className="flex-1 rounded-lg bg-white flex flex-row items-center justify-center pt-[9px] px-[7px] pb-[11px] whitespace-nowrap cursor-pointer border-[1px] border-solid border-black"
                  onClick={onLinkContainer2Click}
                >
                  <div className="flex-1 relative">Let's Explore</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[349px] rounded-3xl bg-whitesmoke-400 box-border flex flex-col items-center justify-start pt-1.5 pb-[21px] pr-[78px] pl-[79px] gap-[10px] max-w-full border-[1px] border-solid border-whitesmoke-400 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[11px]">
              <img
                className="h-[167px] flex-1 relative rounded-77xl max-w-full overflow-hidden object-cover"
                loading="eager"
                alt=""
                src="/yogapng-2@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
              <b className="self-stretch h-[39px] relative flex items-center justify-center shrink-0 mq450:text-base">
                Exercise
              </b>
              <div
                className="w-[181px] rounded-lg bg-white box-border flex flex-row items-center justify-center pt-[9px] px-[7px] pb-[11px] whitespace-nowrap cursor-pointer text-5xl border-[1px] border-solid border-black"
                onClick={onLinkContainer3Click}
              >
                <div className="flex-1 relative">Let's Explore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveFrame;
