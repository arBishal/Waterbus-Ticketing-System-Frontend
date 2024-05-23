import billboardStyle from "./billboard.module.css"

export default function Billboard () {
    return (
        <div className={billboardStyle.billboard}>
                <marquee>This is a basic scrolling text.</marquee>
        </div>
    );
};