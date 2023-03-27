import {
    Button,
    CardContent,
    Dialog,
    DialogActions,
    DialogTitle,
    Typography,
} from "@mui/material";

import Card from "@mui/material/Card";
import { useState } from "react";
import ReactPlayer from "react-player";
import { AiFillDelete } from "react-icons/ai";

import { remove0, remove1, remove2, remove3 } from "../store";
import { useDispatch } from "react-redux";

const Cards = ({ name, link, value }) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = () => {
        //delete card from global state

        if (value === 0) {
            const action = remove0(name);
            dispatch(action);
        } else if (value === 1) {
            const action = remove1(name);
            dispatch(action);
        } else if (value === 2) {
            const action = remove2(name);
            dispatch(action);
        } else if (value === 3) {
            const action = remove3(name);
            dispatch(action);
        }

        setShow(false);
    };
    return (
        <>
            <Card
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
                    <AiFillDelete
                        size={20}
                        color="red"
                        className=" -mt-20 "
                        onClick={() => setShow(true)}
                    />
                    <Typography
                        onClick={() => setOpen(true)}
                        sx={{
                            fontSize: "50px",
                            margin: "auto",
                            ":hover": {
                                cursor: "pointer",
                            },
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
            <Dialog open={show} onClose={() => setShow(false)}>
                <DialogTitle>Do you want to delete?</DialogTitle>
                <DialogActions>
                    <Button onClick={() => setShow(false)} autoFocus>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Cards;
