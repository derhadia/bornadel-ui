import React from 'react';
import { Editor } from 'react-draft-wysiwyg';


const EditorI18n = () => (
    <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        localization={{
            locale: 'en',
        }}
    />
);


export default EditorI18n
