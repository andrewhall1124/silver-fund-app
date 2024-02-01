import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {Navbar} from "@/components/layout/navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Silver Fund App",
  description: "Created by Andrew Hall",
};

const routes = [
  {
    title: 'Test',
    href: 'test',
  },
]

function Logo(){
  return(
    <Link href='/'>
      <div className="text-3xl font-bold">
        Silver Fund App
      </div>
    </Link>
  )
}


function Header(){
  return(
    <div className="sticky top-0 flex justify-between items-center p-4 bg-background/50 backdrop-blur-md z-[40]">
      <Logo/>
      <div className="flex gap-3">
        <ModeToggle/>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  const routes = [
    {
      label: "Active",
      href:"/"
    },
    {
      label: "Work in progress",
      href:"wip"
    },
  ]
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >        
          <Header/>
          <Separator/>
          <Navbar routes={routes}/>
          <Separator/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
