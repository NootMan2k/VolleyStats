/**
 * @copyright 2026 Trystan Queffelec
 * @license Apache-2.0
 */
/**
 * Components
 */ 
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

/** 
 * Hooks
 */
import { useTheme } from "@/components/ThemeProvider";

/** 
 * Assets
 */
import { SunIcon, MoonIcon, MonitorIcon, CheckIcon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle theme">
                    {theme === "light" && <SunIcon/>}
                    {theme === "dark" && <MoonIcon/>}
                    {theme === "system" && <MonitorIcon/>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => setTheme("light")}>
                    Light {theme === "light" && <CheckIcon className="ms-auto"/>}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setTheme("dark")}>
                    Dark {theme === "dark" && <CheckIcon className="ms-auto"/>}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setTheme("system")}>
                    System {theme === "system" && <CheckIcon className="ms-auto"/>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}   