import { useState, useRef, useEffect } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { lgLayout, mdLayout, smLayout } from "./config";

import GridItem from "./components/Grid/GridItem";
import TipTap from "./TipTap";
import ImageComponent from "./components/ImageComponent";
import TextComponent from "./components/TextComponent";
import SocialCard from "./components/SocialCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const breakpoints = {
  lg: 1200,
  md: 996,
  sm: 768,
};

// const initialLayoutConfig = [
//   {
//     i: "item1",
//     x: 0,
//     y: 0,
//     w: 2,
//     h: 2,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item2",
//     x: 1,
//     y: 0,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item3",
//     x: 2,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item4",
//     x: 3,
//     y: 0,
//     w: 2,
//     h: 0.5,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
//   {
//     i: "item5",
//     x: 0,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "SocialCardComponent",
//   },
//   {
//     i: "item6",
//     x: 1,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "ImageComponent",
//     src: "https://source.unsplash.com/random",
//   },
//   {
//     i: "item7",
//     x: 2,
//     y: 1,
//     w: 1,
//     h: 1,
//     minW: 1,
//     minH: 1,
//     type: "TextComponent",
//     text: "Hello World",
//   },
//   {
//     i: "item8",
//     x: 3,
//     y: 1,
//     w: 2,
//     h: 2,
//     minW: 2,
//     minH: 0.5,
//     type: "TipTap",
//   },
// ];

interface LayoutItem extends Layout {
  type: string;
  src?: string;
  text?: string;
}

const GRID_WIDTH = 1024;
const COLUMNS_COUNT = 4;
const GAP = 0;

const GridLayout = () => {
  const [layout, setLayout] = useState<Layout[]>(lgLayout);
  const [currenBreakpoint, setCurrentBreakpoint] = useState<string>("lg");

  const gridRef = useRef<GridLayout>(null);

  const onDropHandler = (layout: any, layoutItem: any) => {
    layoutItem.i = `item${layout.length + 1}`;
    layoutItem.w = 2;
    layoutItem.h = 3;
    layoutItem.x = 0;
    layoutItem.y = Infinity;
    layoutItem.type = "NewComponent";
    setLayout((prevLayout) => [...prevLayout, layoutItem]);
  };

  const renderComponent = (item: LayoutItem) => {
    console.log("Item from renderComponent", item.data);
    switch (item.type) {
      case "TipTap":
        return <TipTap {...item} />;
      case "ImageComponent":
        return <ImageComponent src={item.src} {...item} />;
      case "TextComponent":
        return <TextComponent text={item.text} {...item} />;
      case "SocialCardComponent":
        return <SocialCard {...item} />;
      default:
        return <span>something</span>;
    }
  };

  const handleLayoutChange = (layout: Layout[]) => {};

  const onBreakpointChange = (newBreakpoint: string) => {
    console.log("Breakpoint changed", newBreakpoint);
    setCurrentBreakpoint(newBreakpoint);
  };

  return (
    <section className="flex min-h-screen">
      <div className="w-60 bg-gray-200 border-r min-h-screen p-2">
        <div className="w-full p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-xl font-semibold">Note</h3>
        </div>
      </div>
      <section className="min-h-screen flex-1 relative">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <ResponsiveGridLayout
          ref={gridRef}
          layouts={{ lg: layout, md: mdLayout, sm: smLayout }}
          breakpoints={breakpoints}
          cols={{ lg: 8, md: 4, sm: 2 }}
          rowHeight={(GRID_WIDTH - COLUMNS_COUNT * GAP) / 4}
          onDrop={onDropHandler}
          width={GRID_WIDTH}
          autoSize={false}
          useCSSTransforms={true}
          allowOverlap={false}
          onLayoutChange={handleLayoutChange}
          onBreakpointChange={onBreakpointChange}
          draggableCancel=".drag-cancel"
        >
          {layout.map((item) => (
            <GridItem
              key={item.i}
              ref={gridRef}
              item={item}
              setLayout={setLayout}
              data-grid={{
                ...item,
              }}
            >
              {renderComponent(item)}
            </GridItem>
          ))}
        </ResponsiveGridLayout>
      </section>
    </section>
  );
};

export default GridLayout;
