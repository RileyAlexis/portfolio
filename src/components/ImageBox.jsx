import { useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { Modal } from "react-bootstrap";

function ImageBox({image, data}) {

    const [isTextVisible, setIsTextVisible] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [imageModal, setImageModal] = useState(false);

    const showText = () => {
      setIsTextVisible(true);
    };
  
    const hideText = () => {
      setIsTextVisible(false);
    };

    const showModal = () => {
        console.log(imageModal);
        setImageModal(true);
    }

    const closeModal = () => {
        setImageModal(false);
    }

    return (
        <>

    <Modal open={true} onClose={closeModal}>
        <Typography>Showing the Modal</Typography>
        <img src={image} alt={data} style={{ width: '100%', height: 'auto' }}/>
    </Modal>


        <Paper elevation={4}>
            <div
                style={{
                    position: 'relative',
                    width: '400px',
                    height: '400px',
                    background: `url("${image}") center/cover`,
                    overflow: 'hidden',
                    cursor: 'pointer'
                }}
                onMouseOver={showText}
                onMouseOut={hideText}
                onClick={showModal}
            >
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '20px',
                        boxSizing: 'border-box',
                        transform: isTextVisible ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease-out',
                    }}
                >
                    <Stack>
                    <Typography>{data}</Typography>
                    </Stack>
                </div>
            </div>
    </Paper>
        </>

    );
}

export default ImageBox;