import { useCallback } from "react";
import Divlogin from "../components/divlogin";
import { useRouter } from "next/router";

const LoginFrame = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-200 flex flex-row items-end justify-end pt-[91px] px-36 pb-[23px] box-border tracking-[normal] mq850:pl-9 mq850:pr-9 mq850:box-border mq1225:pl-[72px] mq1225:pr-[72px] mq1225:box-border">
      <section className="w-[1528px] flex flex-row items-start justify-start gap-[20px] max-w-full mq1500:flex-wrap">
        <div className="w-[444px] flex flex-col items-start justify-start pt-[89px] px-0 pb-0 box-border min-w-[444px] max-w-full mq850:pt-[58px] mq850:box-border mq850:min-w-full mq1500:flex-1">
          <Divlogin />
        </div>
        <img
          className="h-[624px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[692px] mq1225:min-w-full"
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
      </section>
      <img
        className="h-[90px] w-[93px] absolute my-0 mx-[!important] top-[51px] left-[59px] cursor-pointer"
        loading="eager"
        alt=""
        src="/group-4.svg"
        onClick={onGroupClick}
      />
    </div>
  );
};

export default LoginFrame;
