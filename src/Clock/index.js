import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const showDateTime = setInterval(() => {
            setDateTime(new Date())
        }, 1000);
        return () => {
            clearInterval(showDateTime);
        };
    }, [])

    return (<div className="clock">
        Dzisiaj jest:{" "}
        {dateTime.toLocaleString("default", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        })}{", "}
        godz.{dateTime.toLocaleString("default", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
        )}
    </div>)
}
export default Clock;
