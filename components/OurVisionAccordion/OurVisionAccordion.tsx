import { Accordion, rem, useMantineTheme } from '@/lib';
import React, { FC, useState } from 'react'
import PlusIcon from "@/assets/images/icons/plus-circle.svg";
import useTrans from '@/utils/hooks/useTrans';


const OurVisionAccordion: FC = () => {
  //   const { label, description } = props;
  const [value, setValue] = useState<string | null>("item-1");
  // const { classes } = useStyles();
  const t = useTrans();
  const theme = useMantineTheme();
  // const getColor = (color: string) =>
  //   theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  return (
    <div className="mt-[67px]">
      <Accordion
        value={value}
        onChange={setValue}
        variant="contained"
        classNames={{
          item: "h-[258px] border-none bg-[#F6F6F6] !rounded-[30px] px-4 lg:p-[40px]",
          label: "!text-accent font-medium text-base lg:text-xl leading-normal",
          chevron: "!text-accent",
          content: "pl-[56px]",

        }}
      >
        <Accordion.Item value="item-1">
          <Accordion.Control
            icon={
              <PlusIcon
                className="w-[24px] h-[24px] text-accent"
                size={rem(20)}
                // color={getColor("red")}
              />
            }
          >
            {t("VIZYONUMUZ")}
          </Accordion.Control>
          <Accordion.Panel>
            {/* Yerel ve uluslararası düzeyde sigorta sektörünün öncülüğünü yapmak.
 Küresel genişleme ve dünya genelinde deneyimlerimizi ve bilgilerimizi paylaşma yeteneği. */}
            <ul className="list-inside list-disc pl-[30px]">
              <li className="text-[15px] font-light leading-[26px]">
                {t("YEREL VE ULUSLARARASI DÜZEYDE SIGORTA SEKTÖRÜNÜN ÖNCÜLÜĞÜNÜ YAPMAK.")}
              </li>
              <li className="text-[15px] font-light leading-[26px]">
                {t(
                  "KÜRESEL GENIŞLEME VE DÜNYA GENELINDE DENEYIMLERIMIZI VE BILGILERIMIZI PAYLAŞMA YETENEĞI."
                )}
              </li>
              
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

OurVisionAccordion.displayName = "OurVisionAccordion"


export default OurVisionAccordion