import {useState} from "react";

const useAsyncState = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);
    const setter = (arg: any) =>
        new Promise(resolve => {
            setValue(arg);
            resolve(arg);
        });
    return [value, setter];
};

export default useAsyncState;
