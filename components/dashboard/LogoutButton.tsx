import { LogOut } from "lucide-react";
import { useLogout } from "../../hooks/useAuth";

export default function LogoutButton() {
  const logout = useLogout();

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
    >
      <LogOut size={16} />
      <span className="text-sm">Logout</span>
    </button>
  );
}