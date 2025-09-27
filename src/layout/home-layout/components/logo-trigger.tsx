import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function LogoTrigger() {
  const { open } = useSidebar();
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!open && isHovering ? (
        <Tooltip>
          <TooltipTrigger>
            <SidebarTrigger className="w-8 h-8" />
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Abrir menu</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <img
          src={logo}
          className={cn("w-8 h-8", "transition-all")}
          alt="Financer Logo"
        />
      )}
    </div>
  );
}
