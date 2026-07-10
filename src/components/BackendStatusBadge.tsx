import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const BackendStatusBadge = () => {
  const [status, setStatus] = useState<"checking" | "connected" | "disconnected">("checking");

  useEffect(() => {
    let cancelled = false;
    const checkConnection = async () => {
      try {
        // Use getSession() to check health; it will throw an error if the client can't reach Supabase.
        await supabase.auth.getSession();
        if (!cancelled) setStatus("connected");
      } catch {
        if (!cancelled) setStatus("disconnected");
      }
    };
    checkConnection();
    return () => {
      cancelled = true;
    };
  }, []);

  const badgeStyles = (() => {
    switch (status) {
      case "checking":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "connected":
        return "bg-green-50 text-green-700 border-green-200";
      case "disconnected":
        return "bg-red-50 text-red-700 border-red-200";
    }
  })();

  const dotColor = (() => {
    switch (status) {
      case "checking":
        return "bg-yellow-500";
      case "connected":
        return "bg-green-500";
      case "disconnected":
        return "bg-red-500";
    }
  })();

  const label = (() => {
    switch (status) {
      case "checking":
        return "Checking...";
      case "connected":
        return "Backend Connected";
      case "disconnected":
        return "Backend Disconnected";
    }
  })();

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border shadow-sm ${badgeStyles}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      {label}
    </div>
  );
};

export default BackendStatusBadge;
