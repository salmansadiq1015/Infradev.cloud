import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProtectedSubscription({ Component }) {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const admin = params.name;
    if (admin === "subscription") {
      navigate(`/admin/${params.name}`);
    } else {
      navigate("/");
    }
  }, [navigate, params]);
  return (
    <div>
      <Component />
    </div>
  );
}
