import { useCallback } from "react";
import { useRouter } from "next/router";

const ContactUs = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/skin-tone-frame");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[29px] px-[26px] pb-[30px] box-border gap-[47px] tracking-[normal] mq900:gap-[47px] mq1700:flex-wrap">
      <div className="flex flex-col items-start justify-start pt-[437px] px-0 pb-0 mq450:pt-[284px] mq450:box-border">
        <div className="w-10 h-1 relative">
          <img
            className="absolute top-[-0.4px] left-[0px] w-2 h-[3.8px]"
            loading="eager"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute top-[-0.4px] left-[32px] w-2 h-[3.8px]"
            loading="eager"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <main className="w-[1659px] rounded-26xl bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[77px] pb-[58px] pr-12 pl-5 box-border relative gap-[127px] max-w-full text-left text-[64px] text-black font-poller-one mq450:gap-[127px] mq900:gap-[127px] mq900:pt-8 mq900:pb-[25px] mq900:box-border mq1325:gap-[127px] mq1325:pt-[50px] mq1325:pr-6 mq1325:pb-[38px] mq1325:box-border">
        <div className="w-[1659px] h-[955px] relative rounded-26xl bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full z-[0]" />
        <div className="w-[635px] flex flex-row items-start justify-end max-w-full">
          <h1 className="m-0 h-[76px] relative text-inherit font-normal font-inherit flex items-center z-[1] mq450:text-19xl mq900:text-32xl">
            Questionnaire:
          </h1>
        </div>
        <section className="w-[1465px] flex flex-col items-center justify-start gap-[101px] max-w-full text-left text-xl text-black font-merge-one mq450:gap-[101px] mq900:gap-[101px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[74px_110px] min-h-[443px] max-w-full mq450:gap-[74px_110px] mq900:gap-[74px_110px]">
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
                Age
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
                BMI
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[209px] relative flex items-center shrink-0 z-[2]">
                Regular Exercise
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
                Weight
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2]">
                Pulse Rate
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2]">
                Systolic BP
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
                Height
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-36 relative flex items-center shrink-0 z-[2] mq450:text-base">
                Fastfood
              </div>
            </div>
            <div className="w-[415px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full whitespace-nowrap z-[1] border-[1px] border-solid border-black">
              <div className="h-[98px] w-[415px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2]">
                Diastolic BP
              </div>
            </div>
          </div>
          <div className="w-[372px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center py-3.5 pr-[26px] pl-5 max-w-full z-[1] text-center border-[1px] border-solid border-white">
            <div className="h-[73px] w-[372px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-white" />
            <div className="h-[47px] w-[124px] relative flex items-center justify-center shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[2] mq450:text-base">
              Submit
            </div>
          </div>
        </section>
        <img
          className="w-[93px] h-[90px] absolute my-0 mx-[!important] top-[25px] left-[-46px] cursor-pointer z-[1]"
          loading="eager"
          alt=""
          src="/group-4.svg"
          onClick={onGroupClick}
        />
      </main>
    </div>
  );
};

export default ContactUs;
