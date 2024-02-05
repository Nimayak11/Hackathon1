import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className="w-[1624px] flex flex-row items-start justify-start max-w-full text-center text-17xl text-white font-prompt">
      <div className="w-[1576px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[159px] w-[198.8px] absolute my-0 mx-[!important] bottom-[-52px] left-[70px] object-contain z-[1]"
          loading="eager"
          alt=""
          src="/image-21@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[344px] box-border relative [row-gap:20px] max-w-full mq825:pl-[86px] mq825:box-border mq450:pl-5 mq450:box-border mq1400:flex-wrap mq1400:pl-[172px] mq1400:box-border">
          <div className="h-[354px] flex-1 relative min-w-[472px] max-w-full mq1125:min-w-full">
            <div className="absolute top-[0px] left-[5px] w-[867px] flex flex-col items-center justify-start">
              <div className="w-[168px] flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border">
                <img
                  className="h-[166px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                  loading="eager"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
              <div className="self-stretch h-28 relative flex items-center justify-center shrink-0 mq825:text-10xl mq450:text-3xl">
                Weight Gain
              </div>
            </div>
            <div className="absolute top-[47px] left-[0px] w-[250px] h-[307px] flex flex-col items-start justify-start gap-[12px]">
              <img
                className="w-[181.6px] flex-1 relative max-h-full object-contain z-[1]"
                loading="eager"
                alt=""
                src="/image-22@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[33px]">
                <div className="flex-1 relative mq825:text-10xl mq450:text-3xl">{`Irregular menstrual cycle `}</div>
              </div>
            </div>
          </div>
          <div className="w-[506px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[506px] max-w-full mq1125:min-w-full mq1400:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[191px] w-[301px] absolute my-0 mx-[!important] bottom-[-56px] left-[-116px] flex items-center justify-center z-[1] mq825:text-10xl mq450:text-3xl">
                Darkness of skin like neck, armpits
              </div>
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq825:flex-wrap">
                <img
                  className="h-[171.2px] w-[169.5px] relative object-contain z-[1] mq825:flex-1"
                  loading="eager"
                  alt=""
                  src="/image-14@2x.png"
                />
                <div className="h-[315px] w-[185px] flex flex-col items-start justify-start pt-[124px] px-0 pb-0 box-border min-w-[185px] mq825:flex-1">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain mq825:self-stretch mq825:w-auto"
                    loading="eager"
                    alt=""
                    src="/image-16@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[90px] w-[93px] absolute my-0 mx-[!important] top-[54px] left-[0px] cursor-pointer"
            loading="eager"
            alt=""
            src="/group-4.svg"
            onClick={onGroupClick}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
