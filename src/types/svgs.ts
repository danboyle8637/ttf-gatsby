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

export type IconType = "clock" | "email" | "location" | "phone";
