import React from "react";
import classnames from "classnames";
import Note from "./note";
import Editable from "./editable";

export default ({
  notes,
  onActiveTodo = () => {},
  onDeleteTodo = () => {},
  onEditTodo = () => {},
  onToggleTodo = () => {}
}) => (
  <ul className="notes">
    {notes.map(({ id, editing, completed, text }) => (
      <li key={id} className="wrap-note">
        <Note
          className={classnames("note", { completed })}
          onClick={onActiveTodo.bind(null, id)}
        >
          <Editable
            className="editable-note"
            editing={editing}
            value={text}
            onEdit={text => onEditTodo(id, text)}
          />
          {completed && (
            <button
              className="delete-note"
              onClick={onDeleteTodo.bind(null, id)}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFMSURBVDhPY8AFHrlZCD33sV793Nvm23Mfm/8QbP3qhbdNFVQJaQCoefEzH+vfQHrWMx+bDgi23g0y+Jm3TQhUGfEAqOnFM2/rZVAuGPy3t2cBGvoBKD4bKoQbAA1oR3iNBAwMEmAwuECNgYAXvtYWQInrWDUQg72t1z/zsBGFGgcOrwqsCknALzztdKHGMTDct7fneOhtIwgM+I9AyX4QmxgMdNlVUEoAsf+HhjJDjUMASIDbtIPYz31tE576WNuA2C98rKOQ2UA5JxAbqP4SUP1SEBsrQDYQxAbaPg3EBobvQ2Q2zJBRAzHBqIHUNRCYYxa88LFNgbCtpyGzgXJ5IDZBA4G2vyGqaAKC//UMTECDnwDVz4cKYQJg3lwEzM//QDYDFZ/Bi8HBACxsfWyDodoxwVMfYy6gYTVAhasIYZBXn/tYhUO1QgEDAwDeG9mOgup51QAAAABJRU5ErkJggg==" />
            </button>
          )}
          <button className="delete-note" onClick={onToggleTodo.bind(null, id)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFBSURBVDhPYxi+QPdEroze6cI44zNprFAh8gHIEN0zBef0zhT+B9FGpwskoVLkAd3TBY0gw2BY/0xBGFSKdKBztsAE6KrfcANPFx4LXRXKDJUmDcjvr+fQPVN4BWYY0OBveieL1KDSpAPd04XdcJdBDMyHSpEOtE8VWQFd9wdhWOF+hv8MjFBp7ED7XKG+7umiaq0r9WxQITDQu1DMDXTdLYTrCj7pnShWhEpjB7pni42BXvgA1bRN5VYuO1SKAeiaSQjDwK5LhUrhBuiagBhsKNA1TsCY/AcTB7p0B0GvgoDBuVxRvdMFl5AMBGou2A7ED+BipwvegXIIVAthADIU6NLLyIaiYGBWgyolHuA09HTheqgS0gG6oUBvv9Y5nicOlSYPQMK08DTQ4D+6p4r8oMIUgv/1TMZnyvmhvGEBGBgAseDbOkIAdhkAAAAASUVORK5CYII=" />
          </button>
        </Note>
      </li>
    ))}
  </ul>
);
