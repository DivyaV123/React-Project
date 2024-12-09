"use client";
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import "../navHome/navItems/navitems.scss"

const NavigationMenu = React.forwardRef(({ className, children, hoverItem, hoverContent, ...props }, ref) => {

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        " z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}>
      {children}
      <NavigationMenuViewport hoverItem={hoverItem} hoverContent={hoverContent} />
    </NavigationMenuPrimitive.Root>
  )
})
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center ",
      className
    )}
    {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

// const navigationMenuTriggerStyle = cva(
//   `group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-normal font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${hoverItem || hoverContent ? 'navitemsArrow' : ''}`
// );


const NavigationMenuTrigger = React.forwardRef(({ className, children, hoverItem, hoverContent, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(`group inline-flex h-[5.31vw] w-max items-center justify-center rounded-md  px-4 py-2 text-normal font-medium transition-colors  focus:outline-none disabled:pointer-events-none disabled:opacity-50  ${hoverItem || hoverContent ? 'navitemsArrow' : ''}`, "group", className)}
    {...props}>
      <div className="duplicate">
      <div>

      </div>
    </div>
    {children}{" "}
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link
const NavigationMenuViewport = React.forwardRef(({ className, hoverItem, hoverContent, ...props }, ref) => (
  <div className={`absolute ${(hoverItem ?? hoverContent) ? 'navItemsOverlay' : ''} top-full flex justify-center -translate-x-1/2 left-[50%] translate-y-0 `}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        " z-10 origin-top-center relative  h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden   text-popover-foreground bg-transparent  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props} />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}>
    <div 
      className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  // navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
