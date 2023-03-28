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
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import {
    remove0,
    remove1,
    remove2,
    remove3,
    add0,
    add1,
    add2,
    add3,
} from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cards = ({ name, link, value }) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const tabss = useSelector((state: RootState) => state.tabs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleEdit = (e) => {
        e.preventDefault();
        //delete existing data from global state
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

        //save new data to global state
        const index = tabss.findIndex(
            (tab: string) => tab === e.target[2].value
        );

        switch (index) {
            case 0: {
                const action0 = add0({
                    name: e.target[0].value,
                    link: e.target[1].value,
                });
                dispatch(action0);
                break;
            }

            case 1: {
                const action1 = add1({
                    name: e.target[0].value,
                    link: e.target[1].value,
                });
                dispatch(action1);
                break;
            }

            case 2: {
                const action2 = add2({
                    name: e.target[0].value,
                    link: e.target[1].value,
                });
                dispatch(action2);
                break;
            }

            case 3: {
                const action3 = add3({
                    name: e.target[0].value,
                    link: e.target[1].value,
                });
                dispatch(action3);
                break;
            }

            default:
                break;
        }

        setEdit(false);
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
                    <AiFillEdit size={20} onClick={() => setEdit(true)} />
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
            <Dialog open={edit} onClose={() => setEdit(false)}>
                <DialogTitle>Edit</DialogTitle>
                <form onSubmit={handleEdit}>
                    <div className="p-5">
                        <div className="flex flex-col mt-1">
                            <label htmlFor="name">Name</label>
                            <input
                                className="border border-black rounded-2xl p-2"
                                type="text"
                                id="name"
                                defaultValue={name}
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label htmlFor="link">Link</label>
                            <input
                                className="border border-black rounded-2xl p-2"
                                type="text"
                                id="link"
                                defaultValue={link}
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label htmlFor="bucket">Bucket</label>
                            <select
                                className="rounded-lg border border-gray-500 p-2"
                                id="bucket"
                                defaultValue={tabss[value]}
                            >
                                {tabss.map((tab: string, index: string) => (
                                    <option key={index} value={tab}>
                                        {tab}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                className="rounded-lg border border-gray-500 p-2"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    );
};

export default Cards;
