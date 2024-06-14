import {
  BottomConnectWrapper,
  ButtonTitleConnect,
  ConnectTitle,
  ConnectWrapper,
  ConnnectItem,
  DescriptionConnect,
  MainTitle,
} from "@/styles/layout/Content";
import {
  AppleIcon,
  BlogIcon,
  HelpCenterIcon,
  StayConnectIcon,
} from "../assets/icons";

export const CONNECT_WITH_US_DATA = [
  {
    icon: <HelpCenterIcon />,
    title: "Help Center",
    content: "Get Support",
    color: "#ff4d00",
    bgColor: "#291a16",
  },
  {
    icon: <BlogIcon />,
    title: "Blog",
    content: "Insign and news from the team",
    color: "#8e8767",
    bgColor: "#62543219",
  },
  {
    icon: <StayConnectIcon />,
    title: "Stay Connected",
    content: "Follow @Uniswap on X for the lastest updates",
    color: "#fc72ff",
    bgColor: "#311c31",
  },
];

const ConnectWithUs = () => {
  return (
    <>
      <ConnectWrapper>
        <MainTitle>Connect With Us</MainTitle>
        <BottomConnectWrapper>
          {CONNECT_WITH_US_DATA.map((data, index) => (
            <ConnnectItem
              key={index}
              style={{
                background: data.bgColor,
                color: data.color,
              }}
            >
              <ButtonTitleConnect
                style={{
                  color: data.color,
                }}
              >
                {data.icon}
                {data.title}
              </ButtonTitleConnect>
              <DescriptionConnect
                style={{
                  color: data.color,
                }}
              >
                {data.content}
              </DescriptionConnect>
            </ConnnectItem>
          ))}
        </BottomConnectWrapper>
      </ConnectWrapper>
    </>
  );
};

export default ConnectWithUs;
