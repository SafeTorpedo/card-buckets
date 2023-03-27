import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const BucketMenu = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("0");
    const [tabs, setTabs] = useState([
        { label: "Entertainment", value: "0" },
        { label: "Education", value: "1" },
        { label: "Work", value: "2" },
        { label: "Other", value: "3" },
    ]);

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
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
                            <Tab label={tabs[0].label} value={tabs[0].value} />
                            <Tab label={tabs[1].label} value={tabs[1].value} />
                            <Tab label={tabs[2].label} value={tabs[2].value} />
                            <Tab label={tabs[3].label} value={tabs[3].value} />
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
                <div className="p-5 ">
                    <input
                        type="text"
                        value={tabs[0].label}
                        onChange={(e) => {
                            const newTabs = [...tabs];
                            newTabs[0].label = e.target.value;
                            setTabs(newTabs);
                        }}
                        className="border border-black rounded-2xl p-2"
                    />
                    <br />
                    <input
                        type="text"
                        value={tabs[1].label}
                        onChange={(e) => {
                            const newTabs = [...tabs];
                            newTabs[1].label = e.target.value;
                            setTabs(newTabs);
                        }}
                        className="border border-black rounded-2xl p-2 mt-2"
                    />
                    <br />
                    <input
                        required
                        type="text"
                        value={tabs[2].label}
                        onChange={(e) => {
                            const newTabs = [...tabs];
                            newTabs[2].label = e.target.value;
                            setTabs(newTabs);
                        }}
                        className="border border-black rounded-2xl p-2 mt-2"
                    />
                    <br />
                    <input
                        type="text"
                        value={tabs[3].label}
                        onChange={(e) => {
                            const newTabs = [...tabs];
                            newTabs[3].label = e.target.value;
                            setTabs(newTabs);
                        }}
                        className="border border-black rounded-2xl p-2 mt-2"
                    />
                    <br />
                    <button
                        onClick={() => {
                            setOpen(false);
                        }}
                        className="border border-black rounded-2xl p-2 mt-2 ml-16 bg-blue-700 text-white"
                    >
                        Save
                    </button>
                </div>
            </Dialog>
        </div>
    );
};

export default BucketMenu;
