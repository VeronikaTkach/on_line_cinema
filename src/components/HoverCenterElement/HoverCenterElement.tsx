import * as HoverCard from "@radix-ui/react-hover-card";
import { ReactNode } from "react";
import { createUseStyles } from "react-jss";


interface HoverCardWithContentProps {
  children: ReactNode;  
  content: ReactNode;   
}

export function HoverCardWithContent({ children, content }: HoverCardWithContentProps) {
  const classes = useStyles();
  
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className={classes.trigger}>{children}</div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={classes.content}>
          {content}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
const useStyles = createUseStyles({
trigger: {
    position: "relative", 
    height: "100%",
  },
  content: {
    position: "absolute", 
    left: 0,
    width: "100%",
    height: "100%",    
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
  },
});
