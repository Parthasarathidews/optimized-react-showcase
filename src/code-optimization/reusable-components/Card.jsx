// Reusable Card wrapper: title + optional footer + children.
const Card = ({ title, footer, children, className = "" }) => (
  <div className={`rounded-lg border border-border bg-card p-4 shadow-sm ${className}`}>
    {title && <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>}
    <div className="text-sm text-muted-foreground">{children}</div>
    {footer && <div className="mt-3 border-t border-border pt-3">{footer}</div>}
  </div>
);

export default Card;
