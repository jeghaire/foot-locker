function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface WrapperProps {
  className?: string;
  children?: JSX.Element;
}

export default function Wrapper({children, className}: WrapperProps) {
  return (
    <div className={cn(".container-1440", className ?? "")}>
      {children}
    </div>
  );
}