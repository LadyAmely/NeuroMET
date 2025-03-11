import React from "react";
import { render } from "react-dom";

export function Notification({children}) {
    return (
        <>
            <style>{`span {
  cursor: pointer;
  appearance: none;
  background-color: rgb(255, 255, 255);
  color: rgb(10, 31, 21);
  font-size: 16px;
  transition-duration: 0s;
  transition-property: all;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  outline-color: rgb(10, 31, 21);
  outline-style: none;
  outline-width: 0px;
  pointer-events: auto;
  position: absolute;
  vertical-align: baseline;
  content: "";
  left: 10px;
  top: 10px;
  border: 0px none rgb(10, 31, 21);
  border-radius: 0px;
  padding: 0px;
  margin: 0px;

}
`}</style>
            <div
                style={{
                    boxSizing: "border-box",
                    backgroundColor: "rgb(72, 199, 142)",
                    color: "rgb(0,0,0)",
                    position: "relative",
                    borderRadius: "6px",
                    padding: "22px 24px 22px 24px",
                    width: "697.5px",
                    fontSize: "16px",
                    lineHeight: "24px",
                }}
            >
                {children}
            </div>
        </>
    );
}
