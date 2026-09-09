import { Link } from "react-router-dom";
import "./Breadcrumb.css";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="cp-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span> / </span>}

          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;