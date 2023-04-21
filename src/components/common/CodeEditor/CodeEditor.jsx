import Editor, { DiffEditor, loader, useMonaco } from "@monaco-editor/react";
import React, { useRef } from "react";

const CodeEditor = () => {
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;
  }
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
    />
  );
};

export default CodeEditor;
