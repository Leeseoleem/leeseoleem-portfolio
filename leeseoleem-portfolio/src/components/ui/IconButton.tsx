import React from "react";
import { IconType } from "react-icons";

type IconButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  children: React.ReactNode;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  children,
  onClick,
  className,
}) => {
  const IconComponent = Icon as React.ComponentType; // 🔥 JSX 사용 가능하도록 변환

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center px-6 py-3 gap-x-2 border-2 rounded-lg font-medium text-[18px] border-gray-20 hover:bg-gray-10 ${
        className || ""
      }`}
    >
      {Icon && <IconComponent />} {/* 🔥 JSX 내부에서 사용 가능하도록 변환 */}
      {children}
    </button>
  );
};

export default IconButton;
