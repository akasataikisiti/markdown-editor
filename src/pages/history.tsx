import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export const History: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Historyee</h1>
      <Button onClick={() => navigate("/editor")}>エディタに戻る</Button>
    </>
  );
};
