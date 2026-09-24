import { useEffect, useState } from "react";

/** Returns the id of the section currently crossing the middle of the viewport. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    const sections = [document.getElementById("top"), ...key.split(",").map((id) => document.getElementById(id))];
    sections.filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active === "top" ? null : active;
}
