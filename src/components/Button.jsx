import { useMagnetic } from "../hooks/usePointerEffects";

/** Link styled as a button, with magnetic hover on fine pointers. */
export default function Button({ variant = "primary", className = "", children, ...props }) {
  const ref = useMagnetic();
  return (
    <a ref={ref} className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
