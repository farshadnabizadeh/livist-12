import { Accordion, useMantineTheme, rem } from "@mantine/core";
import PlusIcon from "@/assets/images/icons/plus-circle.svg";
import { FC, useState } from "react";
import useTrans from "@/utils/hooks/useTrans";

interface OurMissionAccordionType {
  //   label: string;
  //   description: string;
}

const OurMissionAccordion: FC<OurMissionAccordionType> = (props) => {
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
          item: "border-none bg-[#F6F6F6] !rounded-[30px] px-4 lg:p-[40px]",
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
            {t("MİSYONUMUZ")}
          </Accordion.Control>
          <Accordion.Panel>
            <ul className="list-inside list-disc pl-[30px]">
              <li className="text-[15px] font-light leading-[26px]">
                {t("ZENGIN DENEYIM MIRASIYLA GELECEĞE DOĞRU YOLA ÇIKMAK.")}
              </li>
              <li className="text-[15px] font-light leading-[26px]">
                {t(
                  "MÜŞTERI ÖNCELIKLERINI PROFESYONELLIK ÇERÇEVESINDE ŞEKILLENDIRMEK."
                )}
              </li>
              <li className="text-[15px] font-light leading-[26px]">
                {t("MÜŞTERILERE VE ORTAKLARA KARŞI SORUMLULUĞA BAĞLI KALMAK.")}
              </li>
              <li className="text-[15px] font-light leading-[26px]">
                {t("ÇEVRELEYEN TOPLUMA VE ÇEVREYE OLUMLU ETKI YAPMAK.")}
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

OurMissionAccordion.displayName = "OurMissionAccordion";

export default OurMissionAccordion;
