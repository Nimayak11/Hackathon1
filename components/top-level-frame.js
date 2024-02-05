const TopLevelFrame = () => {
  return (
    <div className="flex-1 rounded-26xl bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[86px] pb-[30px] pr-5 pl-[21px] box-border gap-[74px] min-w-[586px] max-w-full text-left text-xl text-black font-merge-one mq450:gap-[74px] mq450:pt-9 mq450:box-border mq1225:pt-14 mq1225:pb-5 mq1225:box-border mq1225:min-w-full mq850:gap-[74px]">
      <div className="w-[902px] h-[861px] relative rounded-26xl bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <div className="w-[709px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
        <div className="h-[98px] w-[709px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
        <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
          Name
        </div>
      </div>
      <div className="w-[709px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
        <div className="h-[98px] w-[709px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
        <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
          Email
        </div>
      </div>
      <div className="w-[709px] bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[26px] px-7 pb-[27px] max-w-full z-[1] border-[1px] border-solid border-black">
        <div className="h-[98px] w-[709px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
        <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
          Phone No.
        </div>
      </div>
      <div className="w-[709px] flex flex-col items-center justify-start gap-[56px] max-w-full mq850:gap-[56px]">
        <div className="self-stretch bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start pt-[27px] px-7 pb-[26px] max-w-full z-[1] border-[1px] border-solid border-black">
          <div className="h-[98px] w-[709px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
          <div className="h-[45px] w-[122px] relative flex items-center shrink-0 z-[2] mq450:text-base">
            Age
          </div>
        </div>
        <div className="w-[377px] flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-center">
          <div className="flex-1 bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center py-3.5 pr-[26px] pl-5 max-w-full z-[1] border-[1px] border-solid border-white">
            <div className="h-[73px] w-[372px] relative bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-white" />
            <div className="h-[47px] w-[124px] relative flex items-center justify-center shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[2] mq450:text-base">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLevelFrame;
