import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import { useTranslation } from "next-i18next";

import { COUNTDOWN_GETTING } from "@/settings/constants";

import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

import iconColon from "../../../public/icons/common/ic-colon.svg";
import iconRight from "../../../public/icons/common/icon-right.svg";
import maleWizard from "../../../public/images/home/male-wizard-banner-home.png";

function Banner() {
  const { t } = useTranslation("home");

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + COUNTDOWN_GETTING);

  return (
    <section>
      <div
        className='pt-[300px] xxlMax:pt-64 xlMax:pt-52 lgMax:pt-44 mdMax:pt-40 smMax:pt-[136px] pb-44 relative xxlMax:pb-36 xlMax:pb-30 '
        style={{
          backgroundImage: "url('/images/home/background-banner-home.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={maleWizard}
          alt='witch'
          className='absolute bottom-0 left-0 max-w-[35vw] xxlMax:-bottom-10 mdMax:hidden'
        />
        <div className='spacing-x-container w-full'>
          <div className='max-w-container'>
            <Typography variant='h1' fontWeight='black' textAlign='center'>
              {t("banner.we_are_getting_ready")}
            </Typography>

            <div className='flex justify-center items-center mt-5 flex-col'>
              <div className='shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] bg-primary-foreground py-7 mdMax:py-6 px-10 mdMax:px-6 rounded-[21px] w-fit xsMax:px-4 xsMax:py-4'>
                <Countdown
                  date={targetDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className='flex justify-center items-center gap-[52px] xxlMax:gap-12 xlMax:gap-10 lgMax:gap-8 mdMax:gap-4 smMax:gap-3 xsMax:gap-1'>
                      <div>
                        <Typography
                          variant='h2'
                          fontWeight='black'
                          color='primary'
                          textAlign='center'
                        >
                          {days}
                        </Typography>
                        <Typography
                          variant='h5'
                          fontWeight='bold'
                          textAlign='center'
                          color='primary'
                        >
                          {t("banner.days")}
                        </Typography>
                      </div>
                      <Image
                        src={iconColon}
                        alt='Colon'
                        width={8}
                        height={18}
                        className='mdMax:w-[6px] xsMax:w-1'
                      />
                      <div>
                        <Typography
                          variant='h2'
                          fontWeight='black'
                          color='primary'
                          textAlign='center'
                        >
                          {hours}
                        </Typography>
                        <Typography
                          variant='h5'
                          fontWeight='bold'
                          color='primary'
                          textAlign='center'
                        >
                          {t("banner.hours")}
                        </Typography>
                      </div>
                      <Image
                        src={iconColon}
                        alt='Colon'
                        width={8}
                        height={18}
                        className='mdMax:w-[6px] xsMax:w-1'
                      />
                      <div>
                        <Typography
                          variant='h2'
                          fontWeight='black'
                          color='primary'
                          textAlign='center'
                        >
                          {minutes}
                        </Typography>
                        <Typography
                          variant='h5'
                          fontWeight='bold'
                          color='primary'
                          textAlign='center'
                        >
                          {t("banner.minutes")}
                        </Typography>
                      </div>
                      <Image
                        src={iconColon}
                        alt='Colon'
                        width={8}
                        height={18}
                        className='mdMax:w-[6px] xsMax:w-1'
                      />
                      <div>
                        <Typography
                          variant='h2'
                          fontWeight='black'
                          color='primary'
                          textAlign='center'
                        >
                          {seconds}
                        </Typography>
                        <Typography
                          variant='h5'
                          fontWeight='bold'
                          color='primary'
                          textAlign='center'
                        >
                          {t("banner.seconds")}
                        </Typography>
                      </div>
                    </div>
                  )}
                />
              </div>

              <div className='mt-[100px] xxlMax:mt-20 xlMax:mt-18 lgMax:mt-16 mdMax:mt-14 smMax:mt-10'>
                <Typography
                  variant='h4'
                  textAlign='center'
                  dangerouslySetInnerHTML={{
                    __html: t("banner.we_will_back_to_something"),
                  }}
                  className='mb-8 mdMax:mb-4'
                />
                <Input
                  placeholder={t("banner.enter_your_email")}
                  suffixIcon={
                    <ReactSVG
                      src={iconRight?.src}
                      width={24}
                      height={24}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-primary'
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' mdMax:flex justify-center items-center -mt-64 smMax:-mt-[200px] hidden smMax:max-w-[280px]'>
        <Image src={maleWizard} alt='witch' className='z-[2] ml-24' />
      </div>
    </section>
  );
}

export default Banner;
