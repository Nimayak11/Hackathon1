import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameNav = () => {
  const router = useRouter();

  const onNavListClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavList1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavList2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divcolContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavButtonClick = useCallback(() => {
    router.push("/login-frame");
  }, [router]);

  const onLinkContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch h-[1024px] overflow-hidden shrink-0 flex flex-row items-end justify-end max-w-full text-center text-5xl text-white font-enriqueta">
      <div className="flex-1 flex flex-col items-center justify-start pt-20 px-20 pb-[225px] box-border gap-[118px] bg-[url('/header@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 mq450:gap-[118px] mq900:gap-[118px] mq900:pt-[34px] mq900:pb-[95px] mq900:box-border mq1325:pt-[52px] mq1325:px-10 mq1325:pb-[146px] mq1325:box-border">
        <div className="w-[1154px] h-[405px] flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[83px] max-w-full mq900:gap-[83px] mq1325:gap-[83px]">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-13xl text-white font-poppins mq900:hidden">
              <div className="w-[204px] flex flex-col items-start justify-start">
                <h1
                  className="m-0 h-[61px] relative text-inherit font-normal font-inherit flex items-center shrink-0 cursor-pointer z-[1]"
                  onClick={onNavListClick}
                >
                  ABOUT
                </h1>
              </div>
              <h1
                className="m-0 h-[61px] relative text-inherit font-normal font-inherit flex items-center cursor-pointer z-[1]"
                onClick={onNavList1Click}
              >
                SERVICES
              </h1>
              <h1
                className="m-0 h-[61px] w-[213px] relative text-inherit font-normal font-inherit flex items-center shrink-0 whitespace-nowrap cursor-pointer z-[1]"
                onClick={onNavList2Click}
              >
                CONTACT US
              </h1>
            </nav>
            <div className="w-[245px] flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border">
              <div
                className="flex-1 rounded bg-gray-400 shadow-[0px_0px_0px_#ea097f] flex flex-row items-center justify-center pt-[26px] px-5 pb-[27px] whitespace-nowrap cursor-pointer"
                onClick={onNavButtonClick}
              >
                <div className="h-[15px] flex-1 relative tracking-[1px] flex items-center justify-center">
                  SignUp / Login
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border max-w-full text-109xl font-love-ya-like-a-sister">
              <h1 className="m-0 relative text-inherit leading-[73.01px] font-normal font-inherit mq450:text-13xl mq450:leading-[29px] mq900:text-32xl mq900:leading-[44px]">
                Gynoguide
              </h1>
            </div>
          </div>
        </div>
        <h1 className="m-0 w-[1680px] relative text-21xl leading-[29px] font-normal font-sue-ellen-francisco flex items-center justify-center max-w-full mq450:text-5xl mq450:leading-[17px] mq900:text-13xl mq900:leading-[23px]">
          Your essential guide to female gynae health!
        </h1>
        <div
          className="w-[340px] rounded-8xs bg-white flex flex-row items-center justify-center pt-[17px] px-[17px] pb-[18px] box-border max-w-full cursor-pointer text-17xl font-poppins"
          onClick={onLinkContainer1Click}
        >
          <div className="flex-1 bg-gray-100 flex flex-row items-center justify-center pt-3 px-[11px] pb-[11px] opacity-[0.9]">
            <div className="h-12 w-[212px] relative flex items-center justify-center shrink-0 mq450:text-3xl mq900:text-10xl">
              Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameNav;
