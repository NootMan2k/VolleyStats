/**
 * @copyright 2026 Trystan Queffelec
 * @license Apache-2.0
 */

//Components
import { Button } from "@/components/ui/button"

//Hooks
import { useSidebar } from "@/components/ui/sidebar"

//Assets
import { Logo } from "@/assets/Logo"
import { MenuIcon } from "lucide-react"

export const Header = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="flex justify-between gap-1 item-center py-3 ps-4 pe-2 border-b lg:hidden">
            <Logo/>

            <Button variant="ghost" size="icon" onClick={ toggleSidebar } aria-label="Toggle mobile menu">
                <MenuIcon/>
            </Button>
        </header>
    )
}