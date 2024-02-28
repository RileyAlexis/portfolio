import React, { ReactDOM } from "react";
import { useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const CodeDisplay = ({ codeProp }) => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    const [codeSnippet, setCodeSnippet] = useState(codeProp);

    const codeStyleBig = {
        position: 'absolute',
        opacity: 0.2,
        fontSize: 14,
        overflow: 'hidden',
        width: (window.innerWidth) * 0.9,
        height: (window.innerHeight) * 0.9,
        filter: 'blur(1.4px)',
        zIndex: -1
    }

    const codeStyleSmall = {
        position: 'absolute',
        opacity: 0.2,
        fontSize: 8,
        overflow: 'hidden',
        width: (window.innerWidth) * 0.9,
        height: (window.innerHeight),
        filter: 'blur(0.8px)',
        zIndex: -4
    }

    const overlayStyle = {
        position: 'absolute',
        height: (window.innerHeight),
        width: (window.innerWidth),
        background: 'rgba(0,0,0,0.3)',
        zIndex: -3

    }



    useEffect(() => {
        setCodeSnippet(() => codeProp);
    }, [codeProp]);


    return (
        <div style={overlayStyle}>
            <Highlight
                theme={themes.okaidia}
                code={codeSnippet}
                language="javascript"
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre style={isSmallScreen ? codeStyleSmall : codeStyleBig}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                <span>{i + 1}</span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}
