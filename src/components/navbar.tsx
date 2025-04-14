import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="w-full shadow px-6 py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">MyApp</Link>

        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/auth/login" className="text-sm font-medium text-gray-700 hover:underline">
                  Login
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/auth/signup" className="text-sm font-medium text-gray-700 hover:underline">
                  Signup
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
