import { FloatingIconButtonGroup } from "@/ui/input/button/components/FloatingIconButtonGroup";
import { IconSearch, IconCheckbox } from "@tabler/icons-react";

export const MyComponent = () => {
  const iconButtons = [
    {
      Icon: IconSearch,
      onClick: () => console.log("Button 1 clicked"),
      isActive: true,
    },
    {
      Icon: IconCheckbox,
      onClick: () => console.log("Button 2 clicked"),
      isActive: true,
    },
  ];

  return (
    <FloatingIconButtonGroup 
    className 
    size="small" 
    iconButtons={iconButtons} />
  );
};
