import { useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import TipTap from "./TipTap";
import GridItemToolbar from "./GridItemToolbar";
import { lgLayout, mdLayout, smLayout } from "./config";
import GridItem from "./components/Grid/GridItem";

const ImageComponent = ({ src }: { src: string }) => (
  <div className="object-cover overflow-hidden h-full">
    <img
      src={src}
      alt="Placeholder"
      className="rounded-3xl h-full w-full object-cover"
    />
  </div>
);

const TextComponent = ({ text }: { text: string }) => (
  <div className="p-4">
    <p className="text-lg">{text}</p>
  </div>
);

const SocialCardComponent = (item: any) => {
  console.log(item);

  return (
    <article className="flex rounded-2xl h-full border border-gray-200 bg-white p-6 shadow-md sm:flex-row flex-col gap-20 transition-all duration-700 ease-in-out relative">
      <GridItemToolbar
        onIncreaseWidth={() => console.log("Increase width")}
        onDecreaseWidth={() => console.log("Decrease width")}
        onIncreaseHeight={() => console.log("Increase height")}
        onDecreaseHeight={() => console.log("Decrease height")}
      />
      {/* Your social card component JSX */}
    </article>
  );
};

const components = [
  { type: "TipTap", component: TipTap },
  { type: "ImageComponent", component: ImageComponent },
  { type: "TextComponent", component: TextComponent },
  { type: "SocialCardComponent", component: SocialCardComponent },
];
const breakpoints = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0,
};

const initialLayoutConfig = [
  {
    i: "item1",
    x: 0,
    y: 0,
    w: 4,
    h: 1,

    type: "SocialCardComponent",
  },
  {
    i: "item2",
    x: 1,
    y: 0,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
  },
  {
    i: "item3",
    x: 2,
    y: 0,
    w: 2,
    h: 0.5,
    minW: 2,
    minH: 0.5,
    type: "TextComponent",
    text: "Hello World",
  },
  {
    i: "item4",
    x: 3,
    y: 0,
    w: 2,
    h: 0.5,
    minW: 2,
    minH: 0.5,
    type: "TipTap",
  },
  {
    i: "item5",
    x: 0,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "SocialCardComponent",
  },
  {
    i: "item6",
    x: 1,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
  },
  {
    i: "item7",
    x: 2,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "TextComponent",
    text: "Hello World",
  },
  {
    i: "item8",
    x: 3,
    y: 1,
    w: 2,
    h: 2,
    minW: 2,
    minH: 0.5,
    type: "TipTap",
  },
];

const ResponsiveGrid = () => {
  const [isDraggable, setIsDraggable] = useState(true);
  const [layout, setLayout] = useState(initialLayoutConfig);

  const gridRef = useRef<GridLayout>(null);

  const onDropHandler = (layout: any, layoutItem: any) => {
    layoutItem.i = `item${layout.length + 1}`;
    layoutItem.w = 2;
    layoutItem.h = 3;
    layoutItem.x = 0;
    layoutItem.y = Infinity;
    setLayout((prevLayout) => [...prevLayout, layoutItem]);
  };

  const calculateRowHeight = () => {
    const width = window.innerWidth;

    if (width >= breakpoints.lg) {
      return 1200 / 8; // Assuming 8 columns at lg breakpoint
    } else if (width >= breakpoints.md) {
      return 1200 / 4; // Assuming 4 columns at md breakpoint
    } else {
      return 1200 / 2; // Assuming 2 columns at sm breakpoint
    }
  };

  const renderComponent = (item) => {
    console.log(item);
    const component = components.find((c) => c?.type === item?.type);
    if (!component) return <span>Unknown component</span>;
    return <component.component {...item} />;
  };

  const handleLayoutChange = (updatedLayout: any) => {
    setLayout(
      updatedLayout.map((item: any) => ({
        ...item,
        w: item.w,
        h: item.h,
      }))
    );
  };

  const columnsAtBreakPoint = { lg: 8, md: 4, sm: 2, xs: 1, xxs: 1 };

  return (
    <section className="flex min-h-screen">
      <div className="w-60 bg-gray-200 border-r min-h-screen p-2">
        <div
          draggable
          onDragStart={() => setIsDraggable(false)}
          onDragEnd={() => setIsDraggable(true)}
          className="w-full p-4 border rounded-md bg-white shadow-sm"
        >
          <h3 className="text-xl font-semibold">Note</h3>
        </div>
      </div>
      <section className="min-h-screen flex-1 relative">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <GridLayout
          ref={gridRef}
          className=""
          layouts={{
            lg: lgLayout,
            md: mdLayout,
            sm: smLayout,
          }}
          breakpoints={breakpoints}
          cols={columnsAtBreakPoint}
          rowHeight={calculateRowHeight()}
          isDraggable={isDraggable}
          onDrop={onDropHandler}
          onLayoutChange={handleLayoutChange}
          margin={[10, 10]}
          compactType={"horizontal"}
          width={1200}
          autoSize={true}
        >
          {layout.map((item) => {
            return (
              <GridItem
                key={item.i}
                item={item}
                ref={gridRef}
                className="bg-white shadow-md rounded-2xl overflow-hidden"
              >
                {renderComponent(item.type)}
              </GridItem>
            );
          })}
        </GridLayout>
      </section>
    </section>
  );
};

export default ResponsiveGrid;
