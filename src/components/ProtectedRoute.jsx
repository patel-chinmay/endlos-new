"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (!auth) {
      router.push("/company/endlosadmin");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
