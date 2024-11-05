import { Accordion, useMantineTheme, rem } from "@mantine/core";
import PlusIcon from "@/assets/images/icons/plus-circle.svg";
import { FC, useState } from "react";
import useTrans from "@/utils/hooks/useTrans";

interface InsuranceExplanationAccordionPropsType {
  label: string;
  description: string;
}

// const useStyles = createStyles((theme) => ({
//   item: {
//     border: "none",
//     background: "#F6F6F6",
//     borderRadius: "30px !important",
//     padding: "40px",
//   },
//   label: {
//     color: "var(--color-accent) !important",
//     fontWeight: 500,
//     fontSize: "20px",
//     lineHeight: "normal",
//   },
//   chevron: {
//     color: "var(--color-accent) !important",
//   },
//   content: {
//     paddingLeft: "56px",
//   },
// }));

const InsuranceExplanationAccordion: FC<
  InsuranceExplanationAccordionPropsType
> = (props) => {
  const { label, description } = props;
  const [value, setValue] = useState<string | null>("item-1");
  // const { classes } = useStyles();
  const t = useTrans();
  const theme = useMantineTheme();
  // const getColor = (color: string) =>
  //   theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  return (
    <div className="container mt-[67px]">
      <Accordion
        value={value}
        onChange={setValue}
        variant="contained"
        classNames={{
          item: 'border-none bg-[#F6F6F6] !rounded-[30px] px-4 lg:p-[40px]',
          label: '!text-accent font-medium text-base lg:text-xl leading-normal',
          chevron: "!text-accent",
          content: 'pl-[56px]',
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
            {t(label.toUpperCase())}
          </Accordion.Control>
          <Accordion.Panel>
            <p className="text-[15px] font-light leading-[26px]" >{t(description.toUpperCase())}</p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

InsuranceExplanationAccordion.displayName = "InsuranceExplanationAccordion";

export default InsuranceExplanationAccordion;
