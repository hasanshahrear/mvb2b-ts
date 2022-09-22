import React from "react";
import DealerLogin from "../../../components/dealer-auth/DealerLogin";
import withAuth from "../../../components/dealer-auth/DealerWithAuth";
const Products: React.FC = () => {
  return <DealerLogin />;
};

export default withAuth(Products);
