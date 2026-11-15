/** Link styled as a button. Variants: primary (orange) and outline. */
export default function Button({ variant = "primary", size, className = "", children, ...props }) {
  return (
    <a className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`} {...props}>
      {children}
    </a>
  );
}
