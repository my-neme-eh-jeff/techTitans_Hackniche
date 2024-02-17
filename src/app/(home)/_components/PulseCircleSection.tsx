import { Button, Tooltip } from "@nextui-org/react";
import { PlusCircleIcon } from "lucide-react";
import { SonarPulse } from "@/components/SonarPulse";
import { useMemo } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

const SONAR_PULSE_SIZE = 80;
const SONAR_PULSE_CIRCLES_COUNT = 4;
const SONAR_PULSE_RADIUS = 130;

export default function PulseCircleSection() {
  const isMobile = useIsMobile();
  const renderSponsors = useMemo(() => {
    if (!sponsors.length) return null;

    return (
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${SONAR_PULSE_RADIUS}px`,
          top: SONAR_PULSE_RADIUS / 6,
          left: SONAR_PULSE_RADIUS / 6,
        }}
      >
        {sponsors.map((sponsor, index) => (
          <Avatar
            key={`${sponsor.MemberId}-${index}`}
            isBordered
            showFallback
            className="absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
            color={getSponsorColor(sponsor) as AvatarProps["color"]}
            name={getSponsorName(sponsor)}
            size={getSponsorSize(sponsor, isMobile)}
            src={sponsor.image}
            style={getSponsorAvatarStyles(index, sponsors)}
            onClick={() =>
              handleExternalLinkClick(
                get(sponsor, "website") || get(sponsor, "profile")
              )
            }
          />
        ))}
      </div>
    );
  }, [isMobile, sponsors]);
  return (
    <div className="relative mt-32 md:mt-60 w-full flex items-center justify-center">
      <SonarPulse
        circlesCount={SONAR_PULSE_CIRCLES_COUNT}
        color="#7928CA"
        icon={
          <Tooltip
            showArrow
            color="secondary"
            content={"Become a sponsor"}
            offset={10}
            radius="full"
          >
            <Button
              isIconOnly
              aria-label="Become a sponsor"
              className="z-50 w-auto h-auto bg-gradient-to-b from-[#FF1CF7] to-[#7928CA]"
              radius="full"
              // onPress={handleBecomeSponsor}
            >
              <PlusCircleIcon
                className="flex items-center justify-center rounded-full text-white"
                size={54}
              />
            </Button>
          </Tooltip>
        }
        playState="running"
        size={SONAR_PULSE_SIZE}
      >
        {renderSponsors}
        <></>
      </SonarPulse>
    </div>
  );
}
