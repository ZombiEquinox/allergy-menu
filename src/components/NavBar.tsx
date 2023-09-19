import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function NavigationBar() {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>LOGO</NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/auth/login" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
     <NavigationMenuItem>
      <Button asChild>
      <Link href="/auth/signup">signup</Link>
    </Button>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  )
}