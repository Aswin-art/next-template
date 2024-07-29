"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import TextareaAutosize from "react-textarea-autosize";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

type Props = {
  blogId?: string;
};

const UneditableEditor = ({ blogId }: Props) => {
  const editor = useCreateBlockNote();

  const [title, setTitle] = useState<string>();

  const { theme } = useTheme();
  const blockNoteTheme =
    theme === "light" || theme === "dark" ? theme : "light";

  const loadInitialContent = async () => {
    const content = `<p class="bn-inline-content">Hello, <strong>world!</strong></p><p class="bn-inline-content"></p>`;
    setTitle("Bank Sampah");

    const blocks = await editor.tryParseHTMLToBlocks(content);
    editor.replaceBlocks(editor.document, blocks);
  };

  useEffect(() => {
    loadInitialContent();
  }, [editor]);

  return (
    <div className="flex flex-col gap-4">
      <TextareaAutosize
        placeholder="Untitled"
        value={title}
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
        disabled
      />
      <div className="-mx-[54px]">
        <BlockNoteView
          editor={editor}
          onChange={() => {}}
          theme={blockNoteTheme}
          editable={false}
        />
      </div>
    </div>
  );
};

export default UneditableEditor;
