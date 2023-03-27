import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rename } from "../store";

const BucketMenu = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("0");

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    //get tabs state from store
    const tabss = useSelector((state: RootState) => state.tabs);
    var [tab0, tab1, tab2, tab3] = tabss;

    const dispatch = useDispatch();
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        // rename global state tabs with new values
        const newArray = [tab0, tab1, tab2, tab3];
        const action = rename(newArray);

        dispatch(action);

        setOpen(false);
    };

    return (
        <div className="mt-[57px] ml-[140px]">
            <div className="grid grid-cols-2">
                <div>
                    <TabContext value={value}>
                        <TabList
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                        >
                            <Tab label={tabss[0]} value="0" />
                            <Tab label={tabss[1]} value="1" />
                            <Tab label={tabss[2]} value="2" />
                            <Tab label={tabss[3]} value="3" />
                        </TabList>
                        <TabPanel className="-ml-20" value="0">
                            0
                        </TabPanel>
                        <TabPanel className="-ml-20" value="1">
                            1
                        </TabPanel>
                        <TabPanel className="-ml-20" value="2">
                            2
                        </TabPanel>
                        <TabPanel className="-ml-20" value="3">
                            3
                        </TabPanel>
                    </TabContext>
                </div>
                <div className="px-20 py-3">
                    <button
                        onClick={() => setOpen(true)}
                        className=" border border-black p-2 rounded-2xl bg-blue-700 text-white"
                    >
                        Rename bucket
                    </button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <DialogTitle>Rename bucket</DialogTitle>
                <form onSubmit={handleSave}>
                    <div className="p-5 ">
                        <input
                            type="text"
                            defaultValue={tab0}
                            onChange={(e) => {
                                tab0 = e.target.value;
                            }}
                            className="border border-black rounded-2xl p-2"
                        />
                        <br />
                        <input
                            type="text"
                            defaultValue={tab1}
                            onChange={(e) => {
                                tab1 = e.target.value;
                            }}
                            className="border border-black rounded-2xl p-2 mt-2"
                        />
                        <br />
                        <input
                            required
                            type="text"
                            defaultValue={tab2}
                            onChange={(e) => {
                                tab2 = e.target.value;
                            }}
                            className="border border-black rounded-2xl p-2 mt-2"
                        />
                        <br />
                        <input
                            type="text"
                            defaultValue={tab3}
                            onChange={(e) => {
                                tab3 = e.target.value;
                            }}
                            className="border border-black rounded-2xl p-2 mt-2"
                        />
                        <br />
                        <button
                            type="submit"
                            className="border border-black rounded-2xl p-2 mt-2 ml-16 bg-blue-700 text-white"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
};

export default BucketMenu;
