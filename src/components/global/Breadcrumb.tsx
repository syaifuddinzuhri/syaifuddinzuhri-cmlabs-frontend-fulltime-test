import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

type BreadcrumbItem = {
  label: string;
  href?: string;
  isActive?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-4 mb-5">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <BreadcrumbItem
            key={index}
            label={item.label}
            isLast={index === items.length - 1}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </ol>
    </nav>
  );
};


export default Breadcrumb;