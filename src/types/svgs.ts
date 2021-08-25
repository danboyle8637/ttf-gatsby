export interface BaseSVGProps {
  width?: string;
  height?: string;
  className?: string;
}

export interface GradientSVGProps {
  width?: string;
  height?: string;
  className?: string;
  gradientId: string;
}

type OverlayLocation = "top" | "bottom";

export interface OverlayProps {
  location: OverlayLocation;
  height: number;
  className?: string;
}

export type IconType = "clock" | "email" | "location" | "phone";
