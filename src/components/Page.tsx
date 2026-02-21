/**
 * @copyright 2026 Trystan Queffelec
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"


/** *
 *  Assets
 */
import { SearchIcon, Settings2Icon, DownloadIcon } from "lucide-react"

import { useSidebar } from "@/components/ui/sidebar"
export const Page = ({children}: React.PropsWithChildren) => {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}   