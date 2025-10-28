// import swal from "sweetalert";
import { useEffect, useRef, useState } from "react";
import "./addEvent.css";

export const AddEvent = ({ basicCalender, setBasicCalender,name }) => {
  const [thisM, setThisM] = useState();
  const [thisD, setThisD] = useState();
  const newTextRef = useRef();
  const newEmugiRef = useRef();
  const em = [
    "בחר אימוג'י",
    "✖️",
    "😢",
    "❕",
    "🛒",
    "💓",
    "❣️",
    "🎁",
    "🎂",
    "🥳",
    "❤️",
    "😂",
    "🤣",
    "🤩",
    "🥰",
    "😍",
    "🍟",
    "🧇",
    "🍿",
  ];

  const add = () => {
    if (
      !newTextRef.current.value ||
      !newEmugiRef.current.value ||
      thisD === undefined ||
      thisM === undefined
    ) {
      alert("נא למלא את כל השדות");
      return;
    }
    const mon = [...basicCalender.Mounths];
    const day = [...mon[thisM].Days];
    const evn = [...day[thisD].events];
    evn.push({
      type: newEmugiRef.current.value,
      text: newTextRef.current.value,
    });
    day[thisD].events = evn;
    mon[thisM].Days = day;
    setBasicCalender({ ...basicCalender, Mounths: mon });
    // const str=JSON.parse(window.localStorage.getItem(name))
    localStorage.setItem(name,JSON.stringify(basicCalender))
    // מוחק נתונים
    newTextRef.current.value = "";
    newEmugiRef.current.value = em[0];
    setThisM(undefined);
    setThisD(undefined);
    // swal("מצוין","הארוע נוסף בהצלחה","success")
  };

  return (
    <>
      <div className="form-wrapper">
        <h1 className="title">הוסף ארוע</h1>
        {thisM !== undefined ? (
          <select
            required
            value={thisD ?? ""}
            onChange={(e) => setThisD(e.target.value)}
          >
            <option value="" disabled hidden>
              בחר יום
            </option>
            {basicCalender.Mounths[thisM].Days.map((d, i) => (
              <option key={i} value={i}>
                {d.num} | {d.name}
              </option>
            ))}
          </select>
        ) : (
          <select
            required
            onChange={(e) => {
              setThisM(e.target.value);
              setThisD(undefined); // מאפס את בחירת היום
            }}
          >
            <option disabled selected hidden>
              בחר חודש
            </option>
            {basicCalender.Mounths.map((m, i) => (
              <option key={i} value={i}>
                {m.name} | {m.num}
              </option>
            ))}
          </select>
        )}
        <input
          type="text"
          ref={newTextRef}
          placeholder="הכנס טקסט כאן"
          required
        />
        <select ref={newEmugiRef}>
          {/* <option disabled selected hidden>
            בחר אימוג'י
          </option> */}
          {em.map((e, i) => (
            <option key={i}>{e}</option>
          ))}
        </select>
        <button onClick={add}>הוסף</button>
      </div>
    </>
  );
};
