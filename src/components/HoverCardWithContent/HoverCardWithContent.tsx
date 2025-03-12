import { useState } from "react";

interface HoverContainerProps {
  className?: string;
  onHoverContent?: React.ReactNode; 
  children: React.ReactNode; 
}

export const HoverContainer: React.FC<HoverContainerProps> = ({
  className = "",
  onHoverContent,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}  
      {isHovered && onHoverContent} 
    </div>
  );
};

