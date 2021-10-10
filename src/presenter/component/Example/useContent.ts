import React from "react";

type UseContent = () => {
  isSome: boolean;
};
export const useContent: UseContent = () => {
  const [isSome] = React.useState(true);

  return {
    isSome,
  };
};
