import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { Controller } from 'react-hook-form';

function TextEditor({
    control,
    name,
}: any) {

    const editorRef: any = useRef(null);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange } }) => (
                <Editor
                    onEditorChange={
                        value =>
                            onChange(value)
                    }
                    apiKey='3743rmrmoeyi5rbjbrqn07vqqlusreuur958r1f1stfyf867'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="create template"
                    init={{
                        height: 500,
                        width: '100%',
                        menubar: true,
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
            )}
        />
    )
}

export default TextEditor