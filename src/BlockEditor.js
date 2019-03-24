import bindAll from 'lodash.bindall';
import LocalizedStrings from 'react-localization';
import { Modal } from 'antd';
import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';


class BlockScriptEditor extends Component {
    constructor (props){
        super(props);
        this.state = {
            retPromise: `  return this.write(\`M0 \\n\`);`
        };
    }


    render (){
        const {
            applyBlockOp,
            onClose,
            blockScript,
            
        } = this.props;
        const code = `${blockScript.opcode} (args, util){\n${blockScript.script}\n${this.state.retPromise}\n}\n`

        return (<Modal
            title="Block Script"
            visible={Boolean(blockScript)}
            onOk={applyBlockOp}
            onCancel={onClose}
            width={640}
        >
            <MonacoEditor 
                width="600"
                height="400"
                language="javascript"
                theme="vs-dark"
                value={code}
            />
        </Modal>)
    }
}


class CodePreview extends Component {
    constructor (props){
        super(props);
        this.state = {

        };
    }

    render (){
        const {
            code,
            onClose,
        } = this.props;

        return (<Modal
            title="index.js"
            visible={Boolean(code)}
            onCancel={onClose}
            width={840}
        >
            <MonacoEditor 
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
            />
        </Modal>)
    }
}



export {
    BlockScriptEditor,
    CodePreview
}