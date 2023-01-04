import React, { useRef, useState, useEffect } from "react";

type Props = {
  name: string;
};

export const Contents = ({ name }: Props) => {
  const importIcon = useRef();

  useEffect(() => {
    importIcon.current = import(`../assets/icons/${name}.svg`).then(
      (module) => {
        console.log(module);
      }
    );
  }, [name]);

  return <></>;
};
