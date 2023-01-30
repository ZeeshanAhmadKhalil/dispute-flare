import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
function TextEditor() {


    const editorRef = useRef(null);

    return (
        <Editor
            apiKey='3743rmrmoeyi5rbjbrqn07vqqlusreuur958r1f1stfyf867'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="create template"
            init={{
                height: 500,
                width: '100%',
                menubar: true,
                selector: "textarea",
                plugins: [
                    'autolink',
                    'lists',
                    'link',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'save',
                    'wordcount'
                ],
                toolbar:
                    'undo redo | blocks | '
                    + 'save'
                    + 'bold italic forecolor | alignleft aligncenter '
                    + 'alignright alignjustify | bullist numlist outdent indent | '
                    + 'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    )
}

export default TextEditor