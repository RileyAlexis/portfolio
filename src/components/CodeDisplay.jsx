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
        opacity: 0.3,
        fontSize: 14,
        overflow: 'hidden',
        width: (window.innerWidth) * 0.9,
        height: (window.innerHeight) * 0.9,
    }

    const codeStyleSmall = {
        position: 'absolute',
        opacity: 0.3,
        fontSize: 8,
        overflow: 'hidden',
        width: (window.innerWidth) * 0.9,
        height: (window.innerHeight),

    }

    useEffect(() => {
        setCodeSnippet(() => codeProp);
    }, [codeProp])

    return (
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
    );
}
