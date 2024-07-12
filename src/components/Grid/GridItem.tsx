// import React, { forwardRef, memo } from "react";
// import Toolbar from "./ToolBar";

// interface ItemProps {
//   i: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
//   minW: number;
//   minH: number;
// }

// interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
//   item: ItemProps;
// }

// function GridItemComponent(
//   { item, style, children, setSize, ...restProps }: GridItemProps,
//   ref: React.Ref<HTMLDivElement>
// ) {
//   console.log("GridItemComponent");
//   const { x, y, w, h, minW, minH, i } = item;

//   // const handleButtonClick = (index) => {
//   //   const sizeMapping = [
//   //     { w: 2, h: 0.5 },
//   //     { w: 2, h: 2 },
//   //     { w: 1, h: 1 },
//   //     { w: 2, h: 1 },
//   //     { w: 1, h: 2 },
//   //   ];
//   //   return setSize(sizeMapping[index]);
//   // };

//   return (
//     <div
//       ref={ref}
//       style={style}
//       {...restProps}
//       data-grid={JSON.stringify({ x, y, w, h, minW, minH, i })}
//     >
//       <div className="border-4 rounded-[28px] h-full w-full overflow-hidden relative">
//         {children}
//         {/* <Toolbar /> */}
//       </div>
//     </div>
//   );
// }

// const GridItem = forwardRef<HTMLDivElement, GridItemProps>(GridItemComponent);

// export default GridItem;

import React, { forwardRef } from "react";
import { Layout } from "react-grid-layout";
import { DustBin } from "../../DustBin";

interface ItemProps extends Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  minH: number;
}

interface GridItemProps extends Layout {
  style?: React.CSSProperties;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
  onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  item?: ItemProps;
}

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      style,
      className,
      item,
      children,
      setLayout,
      key,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
    },
    ref
  ) => {
    // console.log("item in GridItem", item);

    return (
      <div
        ref={ref}
        key={key}
        style={style}
        data-grid={{ ...item }}
        className={`${className} react-grid-item shadow-md border-2 border-black rounded-3xl group transition-all duration-700 active:cursor-grabbing active:shadow-lg`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={() => {
            setLayout((prev: Layout[]) => {
              return prev.filter((i) => i.i !== item.i);
            });
          }}
          className="drag-cancel rounded-full size-8 grid place-items-center absolute -top-4 shadow-md -left-4 m-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10"
        >
          <DustBin className="size-4 text-black/70" />
        </button>
        {children}
        <div className="drag-cancel flex justify-start absolute -bottom-4 left-1/2 transform -translate-x-1/2 rounded-xl bg-white overflow-hidden border opacity-0 group-hover:opacity-100 duration-200 ease-in transition-opacity z-40">
          <button
            className="px-2 py-1 hover:bg-gray-300 font-bold"
            onClick={() => {
              setLayout((prev) => {
                const index = prev.findIndex((i) => i.i === item.i);
                const newLayout = [...prev];
                newLayout[index] = {
                  ...newLayout[index],
                  w: (newLayout[index].w = 1),
                  h: (newLayout[index].h = 1),
                };
                return newLayout;
              });
            }}
          >
            <svg
              className="size-3"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="26"
                height="26"
                rx="4.5"
                stroke="black"
                strokeWidth="7"
              />
            </svg>
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-300 font-bold"
            onClick={() => {
              setLayout((prev) => {
                const index = prev.findIndex((i) => i.i === item.i);
                const newLayout = [...prev];
                newLayout[index] = {
                  ...newLayout[index],
                  w: (newLayout[index].w = 2),
                  h: (newLayout[index].h = 0.5),
                };
                return newLayout;
              });
            }}
          >
            <svg
              className="size-5"
              width="56"
              height="20"
              viewBox="0 0 56 20"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="53"
                height="17"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-300 font-bold"
            onClick={() => {
              setLayout((prev) => {
                const index = prev.findIndex((i) => i.i === item.i);
                const newLayout = [...prev];
                newLayout[index] = {
                  ...newLayout[index],
                  w: (newLayout[index].w = 2),
                  h: (newLayout[index].h = 1),
                };
                return newLayout;
              });
            }}
          >
            {/* <svg
              className="size-5"
              width="56"
              height="20"
              viewBox="0 0 56 20"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="53"
                height="17"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg> */}
            <svg
              className="size-5"
              width="66"
              height="33"
              viewBox="0 0 66 33"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="63"
                height="30"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-300 font-bold"
            onClick={() => {
              setLayout((prev) => {
                const index = prev.findIndex((i) => i.i === item.i);
                const newLayout = [...prev];
                newLayout[index] = {
                  ...newLayout[index],
                  w: (newLayout[index].w = 1),
                  h: (newLayout[index].h = 2),
                };
                return newLayout;
              });
            }}
          >
            {/* <svg
              className="size-5"
              width="66"
              height="33"
              viewBox="0 0 66 33"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="63"
                height="30"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg> */}
            <svg
              className="size-5"
              width="27"
              height="56"
              viewBox="0 0 27 56"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="24"
                height="53"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-300 font-bold"
            onClick={() => {
              setLayout((prev: Layout[]) => {
                const index = prev.findIndex((i) => i.i === item.i);
                const newLayout = [...prev];
                newLayout[index] = {
                  ...newLayout[index],
                  w: (newLayout[index].w = 2),
                  h: (newLayout[index].h = 2),
                };
                return newLayout;
              });
            }}
          >
            <svg
              className="size-5"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="52"
                height="52"
                rx="4.5"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
);

export default GridItem;
