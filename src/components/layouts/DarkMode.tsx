import { useEffect, useState } from "react";
import { SunMoon, Moon } from "lucide-react";
export default function DarkModeButton() {
  const [toggle, setToogle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);
  return (
    <li onClick={() => setToogle(!toggle)} className="link dark:text-white">
      {toggle ? (
        <SunMoon size={28} className="dark:text-white dark:hover:text-black" />
      ) : (
        <Moon size={28} className="dark:text-white dark:hover:text-black" />
      )}
    </li>
  );
}
