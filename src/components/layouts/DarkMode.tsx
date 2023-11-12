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
    <div
      onClick={() => setToogle(!toggle)}
      className=" dark:text-white flex items-center justify-start gap-3"
    >
      <div>
        {toggle ? (
          <SunMoon
            size={25}
            className="dark:text-white dark:hover:text-white"
          />
        ) : (
          <Moon size={25} className="dark:text-white dark:hover:text-white" />
        )}
      </div>
      <span className=" cursor-pointer">{toggle ? "Light" : "Dark"}</span>
    </div>
  );
}
