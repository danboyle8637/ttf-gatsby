import * as React from "react";

import { ClockIcon } from "./ClockIcon";
import { EmailIcon } from "./EmailIcon";
import { LocationIcon } from "./LocationIcon";
import { PhoneIcon } from "./PhoneIcon";
import { IconType } from "../../../types/svgs";

interface RenderIconProps {
  iconType: IconType;
}

export const RenderIcon: React.FC<RenderIconProps> = ({ iconType }) => {
  switch (iconType) {
    case "clock": {
      return <ClockIcon />;
    }
    case "email": {
      return <EmailIcon />;
    }
    case "location": {
      return <LocationIcon />;
    }
    case "phone": {
      return <PhoneIcon />;
    }
    default: {
      throw new Error(
        "You have not handled all of the icons you're capable of rendering. Location: RenderIcon in cards/icons"
      );
    }
  }
};
