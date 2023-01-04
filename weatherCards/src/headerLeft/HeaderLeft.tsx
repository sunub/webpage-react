import { useState, useCallback } from "react";
import { Icon } from "../utils/Icon";

export const HeaderLeft = () => {
  const [name, setName] = useState("sun");
  const handleOnCompleted = useCallback(
    (iconName) => console.log(`${iconName} successfully loaded`),
    []
  );
  const handleError = useCallback(
    (err: Error) => console.error(err.message),
    []
  );

  return (
    <div className="header-left">
      <button
        onClick={() => {
          setName((prev) => {
            return prev === "sun" ? "cloud" : "sun";
          });
        }}
      >
        Icon
      </button>
      <section>
        <Icon
          name={name}
          onCompleted={handleOnCompleted}
          onError={handleError}
        />
      </section>
    </div>
  );
};
