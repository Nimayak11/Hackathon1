import { useCallback } from "react";
import TopLevelFrame from "../components/top-level-frame";
import { useRouter } from "next/router";

const FormContainer = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start pt-[104px] pb-[115px] pr-[159px] pl-[174px] box-border gap-[37px] bg-cover bg-no-repeat bg-[top] tracking-[normal] text-left text-[35px] text-white font-pontano-sans mq1225:pl-[87px] mq1225:pr-[79px] mq1225:box-border mq850:gap-[37px] mq850:pl-[43px] mq850:pr-[39px] mq850:box-border mq1525:flex-wrap">
      <TopLevelFrame />
      <div className="w-[648px] flex flex-col items-start justify-start pt-[87px] px-0 pb-0 box-border min-w-[648px] max-w-full mq450:pt-[57px] mq450:box-border mq1225:min-w-full mq1525:flex-1">
        <div className="self-stretch flex flex-col items-center justify-start min-h-[349px] max-w-full">
          <div className="self-stretch h-[349px] relative bg-whitesmoke-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]" />
          <h2 className="m-0 w-[555px] h-[246px] relative text-inherit font-normal font-inherit flex items-center shrink-0 max-w-full mt-[-310px] mq450:text-[21px] mq850:text-[28px]">
            <span className="w-full">
              <p className="m-0">{`Fill out the form to connect with our gynaecologist. `}</p>
              <p className="m-0">
                After the form has been submitted and reviewed, you’ll receive
                an email with the Google Meet link for an online appointment.
              </p>
            </span>
          </h2>
        </div>
      </div>
      <img
        className="h-[90px] w-[93px] absolute my-0 mx-[!important] top-[59px] left-[43px] cursor-pointer"
        loading="eager"
        alt=""
        src="/group-4.svg"
        onClick={onGroupClick}
      />
    </div>
  );
};

export default FormContainer;
