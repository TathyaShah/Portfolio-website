export interface Link {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}