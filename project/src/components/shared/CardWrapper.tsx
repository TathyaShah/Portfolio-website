interface CardWrapperProps {
  children: React.ReactNode;
}

export function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#2A2A2A]">
      {children}
    </div>
  );
}