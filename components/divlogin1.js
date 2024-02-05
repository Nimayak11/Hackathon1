const Divlogin1 = () => {
  return (
    <div className="self-stretch bg-yellow [backdrop-filter:blur(4px)] box-border flex flex-col items-center justify-start pt-[13px] pb-[25px] pr-[18px] pl-[43px] gap-[14px] max-w-full text-left text-base text-black font-poppins border-[1px] border-solid border-white mq450:pl-5 mq450:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border min-h-[67px] max-w-full text-9xl-8 font-prompt">
        <div className="flex-1 flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch h-[43px] relative font-medium flex items-center shrink-0 mq450:text-4xl">
            Create your account
          </div>
          <div className="w-[194px] flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border text-smi font-poppins">
            <div className="flex-1 relative shrink-0">Let’s get started</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-0 box-border min-h-[302px] max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start text-smi">
            <div className="w-[90px] relative font-semibold flex items-center shrink-0">
              UserName
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full text-darkslateblue">
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-center justify-start py-2.5 px-[21px] max-w-full whitespace-nowrap border-[1px] border-solid border-silver">
              <div className="w-[203px] relative flex items-center shrink-0">
                Enter your username
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 text-smi">
            <div className="relative font-semibold">Email</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start py-2.5 px-[21px] whitespace-nowrap text-darkslateblue border-[1px] border-solid border-silver">
            <div className="relative">Enter your email</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 text-smi">
            <div className="relative font-semibold">Password</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-between py-2.5 px-[21px] gap-[20px] text-darkslateblue border-[1px] border-solid border-silver">
            <div className="h-[23px] relative flex items-center">••••••••</div>
            <div className="relative leading-[16px] font-font-awesome-5-free text-black">
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-10 pl-px box-border max-w-full text-center text-gray-500">
        <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-center justify-center py-[11px] pr-5 pl-[21px] max-w-full whitespace-nowrap border-[7px] border-solid border-gray-300">
          <div className="relative font-medium">Sign in</div>
        </div>
      </div>
      <div className="w-[249px] flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border text-smi">
        <div className="flex-1 relative">
          <span>{`Already have an account? `}</span>
          <b>Log in</b>
        </div>
      </div>
    </div>
  );
};

export default Divlogin1;
