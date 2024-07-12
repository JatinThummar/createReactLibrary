import React from 'react'
import { useScroller } from '../useScroller'

export default { title: 'UseScroller' };

export const UseScrollerExample = () => {
  const scroller = useScroller({ y: 500, isSmooth: true });

  // React.useEffect(() => {
  //   scroller();
  // }, []);

  return (
    <div style={{ height: 3000 }}>
      <button onClick={scroller}>Scroll to (0, 200)</button>
    </div>
  );
}