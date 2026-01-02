import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* Fallback icon so the sidebar never crashes */
const DefaultIcon = ({ size = 20 }) => (
  <span
    style={{
      width: size,
      height: size,
      display: "inline-block",
      borderRadius: 4,
      background: "currentColor",
      opacity: 0.4,
    }}
  />
);

const Sidebar = ({
  /* Data */
  items = [],
  activeKey = null,
  onItemClick = () => {},

  /* Layout */
  width = 240,
  collapsedWidth = 60,

  /* Styling */
  background = "#0f172a",
  textColor = "#cbd5f5",
  activeBg = "#1e293b",
  activeText = "#ffffff",

  /* Header */
  title = "Dashboard",
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      style={{
        width: collapsed ? collapsedWidth : width,
        background,
        color: textColor,
      }}
      className="h-screen transition-all duration-300 flex flex-col rounded-r-4xl shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-lg font-semibold select-none">{title}</span>
        )}

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="opacity-70 hover:opacity-100 cursor-pointer transition"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 px-2">
        {items.length === 0 && !collapsed && (
          <div className="text-xs opacity-50 px-3 py-2">No menu items</div>
        )}

        {items.map((item, index) => {
          const {
            key = index,
            label = "Menu",
            icon: Icon = DefaultIcon,
          } = item;

          const isActive = key === activeKey;

          return (
            <div
              key={key}
              onClick={() => onItemClick(item)}
              style={{
                background: isActive ? activeBg : "transparent",
                color: isActive ? activeText : textColor,
              }}
              className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white/10"
            >
              <Icon size={20} />
              {!collapsed && (
                <span className="text-sm font-medium truncate">{label}</span>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

// const sidebarItems = [
//   { key: "home", label: "Home", icon: Home },
//   { key: "users", label: "Users", icon: Users },
//   { key: "settings", label: "Settings", icon: Settings },
// ];
