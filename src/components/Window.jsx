/** macOS window chrome — traffic lights and an optional centred title — around any surface. */
export default function Window({ title, as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={`window ${className}`} {...props}>
      <div className="window-bar" aria-hidden="true">
        <span className="traffic">
          <i />
          <i />
          <i />
        </span>
        {title && <span className="window-title">{title}</span>}
      </div>
      {children}
    </Tag>
  );
}
