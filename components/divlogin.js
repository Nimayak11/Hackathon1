import { useCallback } from "react";
import { useRouter } from "next/router";

const Divlogin = () => {
  const router = useRouter();

  const onDontHaveAnClick = useCallback(() => {
    router.push("/welcome-frame");
  }, [router]);

  return (
    <div className="self-stretch bg-yellow [backdrop-filter:blur(4px)] flex flex-col items-center justify-start pt-3.5 pb-6 pr-14 pl-11 gap-[22px] text-left text-9xl-8 text-black font-poppins border-[1px] border-solid border-white mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="w-[245px] h-[43px] relative font-medium font-prompt whitespace-pre-wrap flex items-center shrink-0 mq450:text-4xl">
          {" "}
          Welcome Back
        </div>
        <div className="self-stretch h-[120px] flex flex-col items-start justify-start gap-[13px] text-smi">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[42px]">
            <div className="relative">Please enter your details.</div>
          </div>
          <div className="relative font-semibold">Email</div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start py-2.5 px-[21px] whitespace-nowrap text-base text-darkslateblue border-[1px] border-solid border-silver">
            <div className="relative">Enter your email</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-base">
          <div className="relative text-smi font-semibold">Password</div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-end justify-between pt-2.5 pb-[5px] pr-[51px] pl-[21px] gap-[20px] text-darkslateblue border-[1px] border-solid border-silver mq450:pr-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
              <div className="h-[23px] relative flex items-center shrink-0">
                ••••••••
              </div>
            </div>
            <div className="relative leading-[16px] font-font-awesome-5-free text-black z-[1]">
              
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="h-[17px] relative [text-decoration:underline] flex items-center">
              ← Back
            </div>
            <b className="relative text-smi">Forgot Password</b>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-[11px] pr-5 pl-[21px] whitespace-nowrap text-center text-base text-gray-500 border-[7px] border-solid border-gray-300">
        <div className="relative font-medium">Sign in</div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 text-smi">
        <div className="relative cursor-pointer" onClick={onDontHaveAnClick}>
          <span>{`Don't have an account? `}</span>
          <b>Sign up</b>
        </div>
      </div>
    </div>
  );
};

export default Divlogin;
