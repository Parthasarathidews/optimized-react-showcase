// Reusable Button: one component, many variants/sizes.
// Variants live in a lookup object so JSX is never duplicated per style.
const VARIANT_CLASSES = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
  outline: "border border-border bg-card text-foreground hover:bg-secondary",
  danger: "bg-destructive text-destructive-foreground hover:opacity-90",
};

const SIZE_CLASSES = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const Button = ({ variant = "primary", size = "md", className = "", ...props }) => (
  <button
    type="button"
    className={`inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    {...props}
  />
);

export default Button;
