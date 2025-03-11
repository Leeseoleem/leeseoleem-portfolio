type AboutInfoProps = {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
};

const AboutInfo = ({ icon: Icon, title, children }: AboutInfoProps) => {
  return (
    <div className="flex items-center gap-x-8">
      <div className="p-3 rounded-full bg-gray-20">
        <Icon fontSize="large" color="action" />
      </div>
      <div>
        <p className="text-[18px] text-gray-50">{title}</p>
        <p className="text-[24px]">{children}</p>
      </div>
    </div>
  );
};

export default AboutInfo;
