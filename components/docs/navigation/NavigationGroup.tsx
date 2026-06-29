import NavigationItem from "./NavigationItem";
import { NavigationItem as NavItem } from "@/data/navigation";

type NavigationGroupProps = {
  items: NavItem[];
  level?: number;
};

export default function NavigationGroup({
  items,
  level = 0,
}: NavigationGroupProps) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div key={item.href}>
          <NavigationItem
            title={item.title}
            href={item.href}
            available={item.available}
            level={level}
            hasChildren={!!item.children?.length}
          />

          {item.children && item.children.length > 0 && (
            <NavigationGroup
              items={item.children}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </div>
  );
}