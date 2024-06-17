import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ value, onChange }) => {
    const editorRef = useRef(null);

    return (
        <Editor
            apiKey="your-tinymce-api-key"  // Replace with your TinyMCE API key
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={value}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={(newValue, editor) => onChange(newValue)}
        />
    );
};

export default TextEditor;
