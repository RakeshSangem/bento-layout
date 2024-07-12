import React, { ReactNode } from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  AnyExtension,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import FloatingMenu from "@tiptap/extension-floating-menu";
import { DustBin } from "./DustBin.tsx";

const extensions: AnyExtension[] = [StarterKit, FloatingMenu, Underline];

const content = `<p><strong>TipTap</strong> is a headless editor framework for web applications.</p>`;
interface Props {
  setIsDraggable?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TipTap({ setIsDraggable }: Props): ReactNode {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "rounded-[28px] overflow-y-scroll bg-transparent h-full w-full outline-none p-2 ",
      },
    },
  });

  /**
   * 
  editor?.on("focus", () => {
    setIsDraggable && setIsDraggable(false);
  });
  

  editor?.on("blur", () => {
    setIsDraggable && setIsDraggable(true);
  });
  
  */

  return (
    <div className="p-2 h-full w-full rounded-md">
      <div className="w-full h-full rounded-[28px] bg-white">
        <div
          className={`h-full w-full relative ${
            editor?.isFocused ? "bg-gray-200" : ""
          } hover:bg-gray-200 duration-300 group transition-colors ease-in-out`}
        >
          {/* Since we are using at drid level */}
          {/* <button className="rounded-full size-8 grid place-items-center absolute -top-8 shadow-md -left-8 m-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <DustBin className="size-4 text-black/70" />
          </button> */}
          <EditorContent editor={editor}>
            {editor && (
              <BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
                <div className="flex gap-x-2 border shadow-md bg-white">
                  <button
                    className="font-bold py-1 px-2"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                  >
                    B
                  </button>
                  <button
                    className="italic py-1 px-2"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                  >
                    I
                  </button>
                  <button
                    className="underline py-1 px-2"
                    onClick={() =>
                      editor?.chain().focus().toggleUnderline().run()
                    }
                  >
                    U
                  </button>
                </div>
              </BubbleMenu>
            )}
          </EditorContent>
        </div>
      </div>
    </div>
  );
}
