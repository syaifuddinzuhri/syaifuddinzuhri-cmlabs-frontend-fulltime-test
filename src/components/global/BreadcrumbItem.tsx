import { IoIosArrowForward } from "react-icons/io";

type BreadcrumbItemProps = {
  label: string;
  isLast: boolean;
  href?: string;
  isActive?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  isLast,
  href,
  isActive,
}) => {
  return (
    <li className="flex items-center">
      {href ? (
        <a href={href} className={isActive ? "text-primary" : ""}>
          {label}
        </a>
      ) : (
        <span className={isActive ? "text-primary" : ""}>{label}</span>
      )}
      {!isLast && (
        <span className="mx-2">
          <IoIosArrowForward />
        </span>
      )}
    </li>
  );
};

export default BreadcrumbItem;