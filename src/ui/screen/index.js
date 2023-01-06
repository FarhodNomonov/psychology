import React from "react";

export default function UseScreen({ children, ...props }) {
  // const height = React.useMemo(() => window.innerHeight, [window.innerHeight]);
  const height = useWindowSize()[1];

  return (
    <div {...props} style={{ height }}>
      {children}
    </div>
  );
}

export const useWindowSize = () => {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
