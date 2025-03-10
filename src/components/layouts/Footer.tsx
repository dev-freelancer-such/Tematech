import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";

import { Input } from "../ui/input";
import { Typography } from "../ui/typography";
import { socialsMedia } from "@/helpers/data/footer";

import iconPhone from "../../../public/icons/common/ic-phone.svg";
import iconRight from "../../../public/icons/common/icon-right.svg";
import companyLogo from "../../../public/icons/common/tech-logo.svg";
import iconLocation from "../../../public/icons/common/ic-location.svg";

function Footer() {
  const { t } = useTranslation("common");

  function handleRedirectSocial(href: string) {
    window.open(href, "_blank");
  }

  return (
    <footer
      className='spacing-x-container py-[100px] xxlMax:py-20 xlMax:py-16 lgMax:py-14 mdMax:py12 smMax:py-10'
      style={{
        backgroundImage: "url('/images/home/background-footer-home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id='contact-us'
    >
      <section className='max-w-container grid grid-cols-3 gap-y-[68px] gap-x-10 lgMax:grid-cols-2 mdMax:grid-cols-1'>
        <div className='mdMax:flex mdMax:flex-col mdMax:items-center'>
          <ReactSVG
            src={companyLogo?.src}
            width={160}
            height={95}
            className='text-primary-foreground'
          />
          <div className='flex gap-7 items-center smMax:gap-6 mt-10'>
            {socialsMedia?.map((social) => (
              <Image
                src={social?.icon}
                alt={social?.id}
                key={`social-${social?.id}`}
                width={32}
                height={32}
                className='hover:animate-zoom-in-out cursor-pointer'
                onClick={() => handleRedirectSocial(social?.href)}
              />
            ))}
          </div>
        </div>

        <div>
          <Typography fontWeight='bold' variant='h3'>
            {t("footer.address")}
          </Typography>

          <div className='flex gap-3 mt-10 mdMax:mt-5'>
            <Image src={iconLocation} alt='location' className='h-fit' />
            <div>
              <Typography>{t("footer.valletta")}</Typography>

              <Typography className='mt-3'>
                {t("footer.20_phan_dang_luu")}
              </Typography>
            </div>
          </div>
          <div className='mt-10 flex gap-3 mdMax:mt-5'>
            <Image src={iconPhone} alt='phone' />
            <div>
              <Typography>{t("footer.tele_phone")}</Typography>
            </div>
          </div>
        </div>
        <div>
          <Typography fontWeight='bold' variant='h3'>
            {t("footer.subscribe")}
          </Typography>

          <Typography className='mt-10 mdMax:mt-5'>
            {t("footer.subscribe_to_our")}
          </Typography>

          <Input
            placeholder={t("footer.enter_your_email")}
            className='mt-3 bg-transparent border border-primary-foreground !placeholder-primary-foreground text-primary-foreground'
            suffixIcon={
              <ReactSVG
                src={iconRight?.src}
                width={24}
                height={24}
                className='absolute right-3 mt-2 top-1/2 transform -translate-y-1/2 w-6 h-6 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-primary-foreground'
              />
            }
          />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
