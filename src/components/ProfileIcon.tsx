import type { CSSProperties } from "react";
import "./ProfileIcon.css";

type ProfileIconProps = {
  icon: string;
  color: string;
};

type ProfileIconStyle = CSSProperties & {
  "--cp-profile-icon": string;
  "--cp-profile-color": string;
};

function ProfileIcon({ icon, color }: ProfileIconProps) {
  const style: ProfileIconStyle = {
    "--cp-profile-icon": `url("${icon}")`,
    "--cp-profile-color": color,
  };

  return <span className="cp-profile-icon" style={style} aria-hidden="true" />;
}

export default ProfileIcon;
