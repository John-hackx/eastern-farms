import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTo() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
}

export default ScrollTo;
