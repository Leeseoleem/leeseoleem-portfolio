import React from "react";
import { IconType } from "react-icons";

interface TechnologyBadgeProps {
  Icon: IconType; // 아이콘을 동적으로 받음
  label: string;
  bgColor?: string; // 배경색을 동적으로 설정 가능 (기본값 지정)
}

const TechnologyBadge = ({
  Icon,
  label,
  bgColor = "bg-primary",
}: TechnologyBadgeProps) => {
  const IconComponent = Icon as React.ElementType; // React.ElementType으로 고정

  return (
    <div
      className={`flex items-center gap-x-2 py-2 px-4 rounded-md ${bgColor}`}
    >
      <IconComponent fontSize="20px" color="white" />
      <p className="text-[20px] text-gray-white">{label}</p>
    </div>
  );
};

export default TechnologyBadge;
