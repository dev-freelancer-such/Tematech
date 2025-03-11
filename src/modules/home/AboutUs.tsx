import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useTranslation } from "next-i18next";
import { useInView } from "react-intersection-observer";

import { aboutUsDescriptions } from "@/helpers/data/home";
import { COUNT_GAMES, COUNT_USERS } from "@/settings/constants";

import { Typography } from "@/components/ui/typography";

import iconPlus from "../../../public/icons/common/ic-plus.svg";
import pinMap from "../../../public/images/home/pin-map-home.png";
import witch from "../../../public/images/home/witch-about-us-home.png";

function AboutUs() {
  const { t } = useTranslation("home");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <section
      className='mt-32 flex justify-center xxlMax:mt-28 xlMax:mt-22 lgMax:mt-16 mdMax:mt-12'
      id='about-us'
    >
      <div>
        <div className='max-w-[1160px]'>
          <div className='gap-10 grid grid-cols-2 lgMax:grid-cols-1'>
            <div className='spacing-x-container'>
              <Typography
                variant='h2'
                fontWeight='black'
                color='primary'
                className='capitalize'
              >
                {t("about_us.about_us")}
              </Typography>

              <Typography
                color='description'
                className='mt-10 xxlMax:mt-8 xlMax:mt-7 lgMax:mt-6 mdMax:mt-5 smMax:mt-4 xsMax:mt-3'
              >
                {t("about_us.browse_our")}
              </Typography>

              <div className='mdMax:flex items-center mdMax:mt-10 mdMax:gap-4'>
                <div className='mt-20 xxlMax:mt-18 xlMax:mt-16 lgMax:mt-14 mdMax:mt-0 mdMax:basis-1/2'>
                  <div className='flex items-center' ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        duration={2}
                        end={COUNT_USERS}
                        className='text-[80px] xxlMax:text-6xl xlMax:text-5xl leading-[80px] xxlMax:leading-[60px] xlMax:leading-[48px] xsMax:text-[44px] xsMax:leading-[44px] tracking-[0.6px] text-secondary font-bold'
                      />
                    )}

                    <Typography
                      variant='h3'
                      color='secondary'
                      fontWeight='bold'
                      className='mt-10 mdMax:mt-2 mdMax:text-base'
                    >
                      {t("M")}
                    </Typography>
                    <Image
                      src={iconPlus}
                      alt='about us'
                      width={32}
                      height={32}
                      className='xxlMax:w-6 xxlMax:h-6 lgMax:w-5 lgMax:h-5 mdMax:w-4 mdMax:h-4 smMax:w-3 smMax:h-3'
                    />
                  </div>
                  <Typography variant='h3' color='primary' fontWeight='bold'>
                    {t("about_us.users")}
                  </Typography>
                </div>

                <div className='mt-10 xxlMax:mt-8 xlMax:mt-6 lgMax:mt-4 mdMax:mt-0 mdMax:basis-1/2'>
                  <div className='flex items-center'>
                    {inView && (
                      <CountUp
                        start={0}
                        end={COUNT_GAMES}
                        duration={2}
                        className='text-[80px] xxlMax:text-6xl xlMax:text-5xl leading-[80px] xxlMax:leading-[60px] xlMax:leading-[48px] xsMax:text-[44px] xsMax:leading-[44px] tracking-[0.6px] text-secondary font-bold'
                      />
                    )}

                    <Image
                      src={iconPlus}
                      alt='about us'
                      width={32}
                      height={32}
                      className='xxlMax:w-6 xxlMax:h-6 lgMax:w-5 lgMax:h-5 mdMax:w-4 mdMax:h-4 smMax:w-3 smMax:h-3'
                    />
                  </div>
                  <Typography variant='h3' color='primary' fontWeight='bold'>
                    {t("about_us.games")}
                  </Typography>
                </div>
              </div>
            </div>

            <div className='bg-background-foreground py-28 px-[75px] xxlMax:py-24 xlMax:py-20 lgMax:py-16 mdMax:py-14 smMax:py-12 xsMax:py-10 xxlMax:px-16 xlMax:px-14 lgMax:px-12 mdMax:px-7 smMax:px-5 xsMax:px-4 flex flex-col gap-10'>
              {aboutUsDescriptions?.map((aboutUs) => (
                <div key={`about-us-${aboutUs?.key}`} className='flex gap-5'>
                  <div className='p-3 rounded-full flex items-center justify-center min-w-[50px] h-[50px] bg-background-oval'>
                    <Image
                      src={aboutUs?.icon}
                      alt='about us description'
                      width={24}
                      height={24}
                    />
                  </div>

                  <div>
                    <Typography
                      variant='h3'
                      fontWeight='bold'
                      color='primary'
                      className='capitalize'
                    >
                      {t(`about_us.${aboutUs?.label}`)}
                    </Typography>
                    <Typography color='description' className='mt-2'>
                      {t(`about_us.${aboutUs?.description}`)}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative flex flex-col justify-center items-center mt-[68px] xxlMax:mt-12 xlMax:mt-10'>
            <Image
              src={witch}
              alt='about us'
              width={535}
              height={440}
              className='xxlMax:w-96 xlMax:w-80 lgMax:w-64 smMax:w-52 xxlMax:h-96 xlMax:h-80 lgMax:h-64 smMax:h-48 mdMax:h-64 z-[2] mdMax:w-[300px] animate-floating'
            />
            <Image
              src={pinMap}
              alt='about us'
              width={1160}
              height={428}
              className='-mt-24 z-[1] mdMax:-mt-12 xsMax:-mt-8'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
