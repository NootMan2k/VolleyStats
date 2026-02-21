/**
 * @copyright 2026 Trystan Queffelec
 * @license Apache-2.0
 */

/**
 * Component 
 */
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarProvider, SidebarInset} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Header"
import { Page } from "@/components/Page"

export const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider open={false}>
        <AppSidebar/>

        <SidebarInset>
          <Header/>

          <main>
            <Page>

            </Page>
          </main>
        </SidebarInset>

      </SidebarProvider>
    </ThemeProvider>
  )
}

