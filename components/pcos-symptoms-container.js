import { useCallback } from "react";
import { useRouter } from "next/router";

const PcosSymptomsContainer = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="w-[1578px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-center text-17xl text-white font-prompt">
      <div className="w-[541px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-full">
        <div className="w-[489px] flex flex-col items-end justify-start gap-[51px] max-w-full mq825:gap-[51px]">
          <div className="w-[372px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[113px] flex-1 relative flex items-center justify-center mq825:text-10xl mq450:text-3xl">
              Uncontrolled hair loss
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
            <img
              className="h-[201px] w-[202px] relative object-contain z-[1] mq450:flex-1"
              loading="eager"
              alt=""
              src="/image-23@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[187px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[59px] mq450:gap-[59px]">
                <div className="w-[221px] relative flex items-center justify-center mq825:text-10xl mq450:text-3xl">
                  Abdominal pain
                </div>
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="w-[221px] flex flex-col items-start justify-start gap-[29px]">
                    <div className="self-stretch relative mq825:text-10xl mq450:text-3xl">
                      Acne
                    </div>
                    <div className="w-[197px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                      <img
                        className="h-[191px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                        loading="eager"
                        alt=""
                        src="/image-19@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[367px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-full text-29xl font-rakkas mq825:pt-[26px] mq825:box-border">
        <div className="w-[745px] flex flex-col items-start justify-start gap-[88px] max-w-[203%] shrink-0 mq825:gap-[88px] mq450:gap-[88px]">
          <div className="w-[495px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-[25px] px-16 pb-[35px] box-border relative max-w-full mq450:pl-8 mq450:pr-8 mq450:box-border">
              <div className="w-[331px] h-[122px] relative flex items-center justify-center shrink-0 max-w-full mq825:text-19xl mq450:text-10xl">
                PCOS SYMPTOMS
              </div>
              <div
                className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(44,_88,_33,_0.15),_rgba(65,_105,_55,_0.13)_10%,_rgba(160,_248,_138,_0.08)_44%,_rgba(166,_185,_162,_0.06)_58%,_rgba(118,_255,_83,_0.04)_72%,_rgba(67,_145,_47,_0))] cursor-pointer z-[1]"
                onClick={onRectangleClick}
              />
            </div>
          </div>
          <div className="self-stretch h-[349px] relative max-w-full text-17xl font-prompt">
            <div className="absolute top-[0px] left-[181px] w-[564px] flex flex-col items-center justify-start gap-[14px] max-w-full">
              <div className="self-stretch h-[132px] relative flex items-center shrink-0 mq825:text-10xl mq450:text-3xl">
                <span>
                  <p className="m-0">{`Excessive `}</p>
                  <p className="m-0">facial hair</p>
                </span>
              </div>
              <div className="w-[178px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border">
                <img
                  className="h-[179.9px] flex-1 relative max-w-full overflow-hidden object-contain"
                  loading="eager"
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[11px] left-[0px] w-[250px] flex flex-col items-end justify-start gap-[12px]">
              <div className="self-stretch relative mq825:text-10xl mq450:text-3xl">
                High Testosterone levels
              </div>
              <div className="w-[203px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
                <img
                  className="h-[191px] flex-1 relative max-w-full overflow-hidden object-contain"
                  loading="eager"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[10px] min-w-[435px] max-w-full mq825:min-w-full">
        <div className="w-[487px] flex flex-row items-start justify-start py-0 px-[78px] box-border min-h-[140px] max-w-full mq825:pl-[39px] mq825:pr-[39px] mq825:box-border">
          <div className="h-[110.6px] flex-1 relative flex items-center justify-center max-w-full mq825:text-10xl mq450:text-3xl">
            Difficulty in getting pregnant
          </div>
        </div>
        <div className="w-[513px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center [row-gap:20px] max-w-full mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[197px]">
              <div className="w-[413px] h-[137px] relative flex items-center justify-center shrink-0 max-w-[136%] z-[1] mq825:text-10xl mq450:text-3xl">
                Spotting
              </div>
            </div>
            <img
              className="h-[168.5px] w-[166.2px] relative object-contain mq825:flex-1"
              loading="eager"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch h-[262px] relative">
          <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[670px] h-[90px] mq825:text-10xl mq450:text-3xl">
            Fatigue
          </div>
          <img
            className="absolute top-[71px] left-[378px] w-[185px] h-[191px] object-contain z-[1]"
            loading="eager"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PcosSymptomsContainer;
