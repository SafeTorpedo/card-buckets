import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add0, add1, add2, add3 } from "../store";

const Add = () => {
    const navigate = useNavigate();

    //get tabs state data
    const tabss = useSelector((state: RootState) => state.tabs);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        //find index of bucket
        const index = tabss.findIndex(
            (tab: string) => tab === e.target[2].value
        );

        //add new card to bucket
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

        navigate("/");
    };
    return (
        <form
            onSubmit={handleSubmit}
            className=" w-[500px] h-[500px] ml-[30%] mt-[50px] shadow-md border border-black p-4 rounded-3xl"
        >
            <h1 className="text-center">Enter new card</h1>
            <div className="flex flex-col mt-4">
                <label htmlFor="name">Name</label>
                <input
                    className="rounded-lg border border-gray-500 p-2"
                    type="text"
                    id="name"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label htmlFor="link">Link</label>
                <input
                    className="rounded-lg border border-gray-500 p-2"
                    type="text"
                    id="link"
                />
            </div>

            <div className="flex flex-col mt-4">
                <label htmlFor="bucket">Bucket</label>
                <select
                    className="rounded-lg border border-gray-500 p-2"
                    id="bucket"
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
                    Add
                </button>
            </div>
        </form>
    );
};

export default Add;
