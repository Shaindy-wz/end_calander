import { useEffect } from "react";
import "./calander.css";

export const Calander = ({ myName, myFont, myBackRound, basicCalender }) => {
  return (
    <>
      {/* {useEffect(() => {
        document.body.style.backgroundColor = { myBackRound };
        document.body.getElementsByClassName("day")[0].style.backgroundColor = {
          myBackRound,
        };
        document.body.style.color = { myFont };
      }, [])} */}
      <h1>{myName}</h1>
      {basicCalender.Mounths.map((m) => {
        return (
          <>
            <div style={{ color: myFont }}>
              <div className="mounths" style={{ backgroundColor: myBackRound }}>
                <h1>
                  {m.name} | {m.num}
                </h1>
                <div className="datOfWeek">Sunday</div>
                <div className="datOfWeek">Monday</div>
                <div className="datOfWeek">Tuesday</div>
                <div className="datOfWeek">Wednesday</div>
                <div className="datOfWeek">Thursday</div>
                <div className="datOfWeek">Friday</div>
                <div className="datOfWeek">Shabbat</div>
                {Array.from({ length: m.Days[0].dayOfWeek - 1 }, () => {
                  return (
                    <>
                      <div className="day"></div>
                    </>
                  );
                })}
                {m.Days.map((d) => {
                  return (
                    <>
                      <div className="days">
                        <span className="h">{d.name}</span>
                        <span className="l">{d.num}</span>
                        {d.events.map((e) => {
                          return (
                            <>
                              <div className="events">
                                <span>{e.type}</span>
                                <span>{e.text}</span>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
