import { useState, useEffect } from "react";

export default function Dark() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "enabled"
    );
    

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
            const footer = document.querySelector("footer")
            footer.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
            const footer = document.querySelector("footer")
            footer.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
