import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameParent = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start pt-16 px-5 pb-[102px] box-border bg-cover bg-no-repeat bg-[top] tracking-[normal]">
      <section className="w-[1307px] rounded-52xl bg-whitesmoke-400 box-border flex flex-col items-center justify-start pt-[38px] pb-[51px] pr-[39px] pl-[71px] relative gap-[31px] max-w-full text-center text-29xl text-gray-400 font-oxygen border-[1px] border-solid border-whitesmoke-100 lg:pl-[35px] lg:box-border mq450:pt-5 mq450:pb-[21px] mq450:box-border mq750:gap-[31px] mq1050:pt-[25px] mq1050:pb-[33px] mq1050:box-border">
        <div className="w-[1307px] h-[916px] relative rounded-52xl bg-whitesmoke-400 box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke-100" />
        <b className="w-[588px] h-[88px] relative flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-10xl mq1050:text-19xl">
          1 Reason Why
        </b>
        <div className="self-stretch h-[708px] relative text-21xl font-poppins text-black text-left flex items-center shrink-0 z-[1] mq450:text-5xl mq1050:text-13xl">
          <span>
            <p className="m-0">{`...you should exercise even during your periods. Engaging in exercise during your menstrual period is a personal experience that should be tailored to your body's needs and preferences. It's beneficial to choose activities that you can tolerate, that are good for your body, and that you genuinely enjoy. Recognize that the first day or two of your period may present challenges, particularly with a heavier flow. During this time, consider opting for exercises that you find comfortable to do at home. If the initial days of your period prove to be demanding, it's perfectly acceptable to take it easy and modify your workouts accordingly. `}</p>
          </span>
        </div>
        <img
          className="w-[93px] h-[90px] absolute my-0 mx-[!important] top-[-8px] left-[-21.5px] cursor-pointer z-[1]"
          loading="eager"
          alt=""
          src="/group-4.svg"
          onClick={onGroupClick}
        />
      </section>
    </div>
  );
};

export default FrameParent;
