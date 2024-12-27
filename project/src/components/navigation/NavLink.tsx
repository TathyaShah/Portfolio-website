import { Link } from './types';

export function NavLink({ href, children, onClick }: Link) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white/80 hover:text-primary transition-colors duration-300 text-lg font-medium px-4 py-2"
    >
      {children}
    </a>
  );
}