"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import TextareaAutosize from "react-textarea-autosize";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Button } from "./ui/button";

import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

type Props = {};

const EditableEditor = () => {
  const editor = useCreateBlockNote();
  const router = useRouter();

  const [title, setTitle] = useState<string>();

  const { theme } = useTheme();
  const blockNoteTheme =
    theme === "light" || theme === "dark" ? theme : "light";

  function fakePromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber >= 0.5) {
          resolve("Data berhasil diambil!");
        } else {
          reject(new Error("Gagal mengambil data."));
        }
      }, 1000);
    });
  }

  const handleSave = async () => {
    console.log("title", title);
    console.log("content", editor.document);
    const html = await editor.blocksToHTMLLossy(editor.document);

    if (title == undefined || title == "") {
      toast.error("Gagal!", {
        duration: 1000,
      });
      return;
    }

    toast.promise(fakePromise(), {
      loading: "Loading...",
      success: "Berhasil!",
      error: "Gagal!",
    });

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <TextareaAutosize
        placeholder="Untitled"
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="-mx-[54px]">
        <BlockNoteView editor={editor} theme={blockNoteTheme} editable={true} />
      </div>
      <div className="flex justify-end">
        <Button
          variant={"outline"}
          size={"lg"}
          onClick={handleSave}
          className="hover:text-primary hover:border-primary transition-all duration-300"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default EditableEditor;
