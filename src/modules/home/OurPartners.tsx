import React, { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { ourPartnersOptions } from "@/helpers/data/home";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

function OurPartners() {
  const { t } = useTranslation("home");

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section
      className='spacing-x-container w-full mt-32 xxlMax:mt-24 xlMax:mt-20 lgMax:mt-18 bg-background-partners  mdMax:mt-12'
      id='partners'
    >
      <div className='max-w-container py-[120px] xxlMax:py-20 xlMax:py-16 lgMax:py-14 mdMax:py-10'>
        <Typography
          variant='h2'
          fontWeight='black'
          color='primary'
          textAlign='center'
          className='capitalize'
        >
          {t("our_partners.our_partners")}
        </Typography>

        <div className='flex justify-center xlMax:px-20 lgMax:px-16'>
          <Carousel
            className='w-full max-w-[1460px] mt-20 xxlMax:mt-16 xlMax:mt-14 lgMax:mt-12 mdMax:mt-10'
            plugins={[plugin.current]}
            ref={emblaRef}
          >
            <CarouselContent className='-ml-1'>
              {ourPartnersOptions
                .concat(ourPartnersOptions, ourPartnersOptions)
                .map((partner, index) => (
                  <CarouselItem
                    key={`partner-${index}-${partner.id}`}
                    className='pl-1 basis-1/5 mdMax:basis-1/2 xlMax:basis-1/3'
                  >
                    <Image src={partner?.logo} alt='partner' />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] bg-primary-foreground border-none cursor-pointer' />
            <CarouselNext className='rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] bg-primary-foreground border-none cursor-pointer' />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
