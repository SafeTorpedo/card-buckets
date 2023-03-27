import { CardContent, Dialog, DialogTitle, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import ReactPlayer from "react-player";

const Cards = ({ name, link }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card
                onClick={() => setOpen(true)}
                variant="outlined"
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: "50px",
                            margin: "auto",
                        }}
                        color="text.secondary gutterBottom"
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Card>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle
                    sx={{
                        fontSize: "30px",
                    }}
                >
                    {name}
                </DialogTitle>

                <ReactPlayer
                    url={link}
                    playing
                    width="80%"
                    style={{
                        padding: "10px",
                        margin: "auto",
                    }}
                />
            </Dialog>
        </>
    );
};

export default Cards;
