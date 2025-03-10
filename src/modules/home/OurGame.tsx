import React from "react";
import { useTranslation } from "next-i18next";

import { ourGamesOptions } from "@/helpers/data/home";

import { Typography } from "@/components/ui/typography";
import CardOurGame from "@/components/ui/card-our-game";

function OurGame() {
  const { t } = useTranslation("home");

  return (
    <section
      className='spacing-x-container w-full mt-32 xxlMax:mt-24 xlMax:mt-20 lgMax:mt-18 mdMax:mt-12'
      id='games'
    >
      <div className='max-w-container'>
        <Typography
          variant='h2'
          fontWeight='black'
          color='primary'
          textAlign='center'
          className='capitalize'
        >
          {t("our_games.our_games")}
        </Typography>
        <Typography
          textAlign='center'
          color='description'
          dangerouslySetInnerHTML={{
            __html: t("our_games.as_a_poineer"),
          }}
          className='mt-6 xlMax:mt-5 xsMax:mt-4'
        />

        {/* <div
          className={cn(`mt-20 xxlMax:mt-18 xlMax:mt-16 lgMax:mt-14 mdMax:mt-12 xsMax:mt-10 
         grid grid-cols-4 xxlMax:grid-cols-3 lgMax:grid-cols-2 gap-6 lgMax:gap-x-[15px] lgMax:gap-y-5`)}
        >
          {ourGamesOptions?.map(
            (product: OurGamesOptionsInterface, index: number) => {
              return (
                <div
                  key={`eco-sport-${index} ${
                    index % 4 === 1 || index % 4 === 3 ? "mt-[150px]" : ""
                  }`}
                >
                  <CardOurGame product={product} />
                </div>
              );
            }
          )}
        </div> */}

        <div className='mt-20 xxlMax:mt-18 xlMax:mt-16 lgMax:mt-14 mdMax:mt-12 xsMax:mt-10 flex flex-col md:flex-row mdMax:flex-wrap mdMax:hidden'>
          <div className='w-full md:w-1/2 mdMax:w-1/2 px-3 flex flex-col gap-y-6 lgMax:gap-y-5'>
            {ourGamesOptions?.slice(0, 3).map((product) => (
              <CardOurGame product={product} key={product?.id} />
            ))}
          </div>
          <div className='w-full md:w-1/2 mdMax:w-1/2 px-3 mdMax:pt-10 pt-[120px] lgMax:pt-10 flex flex-col gap-y-6 lgMax:gap-y-5'>
            {ourGamesOptions?.slice(3, 6).map((product) => (
              <CardOurGame product={product} key={product?.id} />
            ))}
          </div>
          <div className='w-full md:w-1/2 mdMax:w-1/2 px-3 flex flex-col gap-y-6 lgMax:gap-y-5'>
            {ourGamesOptions?.slice(6, 9).map((product) => (
              <CardOurGame product={product} key={product?.id} />
            ))}
          </div>
          <div className='w-full md:w-1/2 mdMax:w-1/2 px-3 mdMax:pt-10 pt-[120px] lgMax:pt-10 flex flex-col gap-y-6 lgMax:gap-y-5 xlMax:hidden'>
            {ourGamesOptions?.slice(9, 12).map((product) => (
              <CardOurGame product={product} key={product?.id} />
            ))}
          </div>
        </div>
        <div className='hidden mdMax:flex mt-20 xxlMax:mt-18 xlMax:mt-16 lgMax:mt-14 mdMax:mt-12 xsMax:mt-10 flex-wrap'>
          <div className='w-full mdMax:w-1/2 flex flex-col mdMax:gap-y-5 pr-2'>
            {ourGamesOptions
              ?.filter((_, index) => index % 2 === 0)
              .map((product) => (
                <CardOurGame product={product} key={product?.id} />
              ))}
          </div>
          <div className='w-full mdMax:w-1/2 flex flex-col mdMax:gap-y-5 mt-10 pl-2'>
            {ourGamesOptions
              ?.filter((_, index) => index % 2 !== 0)
              .map((product) => (
                <CardOurGame product={product} key={product?.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurGame;
