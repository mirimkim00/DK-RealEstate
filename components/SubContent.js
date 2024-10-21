import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function SubContent({ currentPage }) {
  const [DynamicPageComponent, setDynamicPageComponent] = useState(null);

  useEffect(() => {
    async function loadComponent() {
      try {
        const PageComponent = await dynamic(() =>
          import(`../pages/${currentPage}`)
        );
        setDynamicPageComponent(() => PageComponent);
      } catch (error) {
        setDynamicPageComponent(() => () => <div>Page not found</div>);
      }
    }

    loadComponent();
  }, [currentPage]);

  return (
    <div>
      {DynamicPageComponent ? <DynamicPageComponent /> : <div>Loading...</div>}
    </div>
  );
}
