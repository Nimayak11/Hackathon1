import { useCallback } from "react";
import Divlogin1 from "../components/divlogin1";
import { useRouter } from "next/router";

const WelcomeFrame = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/login-frame");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-200 flex flex-row items-start justify-center pt-[91px] pb-[23px] pr-5 pl-36 box-border [row-gap:20px] tracking-[normal] mq900:pl-9 mq900:box-border mq1275:pl-[72px] mq1275:box-border mq1600:flex-wrap">
      <div className="w-[444px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[444px] max-w-full mq900:min-w-full mq1600:flex-1">
        <Divlogin1 />
      </div>
      <img
        className="w-[1064px] relative max-h-full object-contain max-w-full mq1600:flex-1"
        loading="eager"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="h-[90px] w-[93px] absolute my-0 mx-[!important] top-[57px] left-[69px] cursor-pointer"
        loading="eager"
        alt=""
        src="/group-4.svg"
        onClick={onGroupClick}
      />
    </div>
  );
};

export default WelcomeFrame;
