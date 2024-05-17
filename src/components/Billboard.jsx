import billboardStyle from "./billboard.module.css"

export default function Billboard () {
    return (
        <div className={billboardStyle.billboard}>
            ...this is a running Billboard...
        </div>
    );
};