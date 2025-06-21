import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";


export const ThemeToggle = ({ isMobile = false }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme == "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className={cn(
            "p-2 rounded-full transition-colors duration-300 border border-transparent",
        !isMobile
          ? "fixed sm:top-5 lg:top-[15px] top-4 md:top-4 right-5 z-50 hidden sm:block" // Desktop
          : "block sm:hidden" // Mobile inside menu
        )}
        aria-label="Toggle Theme">
        {isDarkMode ? (
             <Sun className="h-6 w-6 text-yellow-300"/> 
            ) : (
                 <Moon className="h-6 w-6 text-blue-900 "/> 
            )} 
        </button>
    )
}