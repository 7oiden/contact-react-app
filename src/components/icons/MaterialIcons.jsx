import Icon from "@mdi/react";
import {
  mdiTrashCan,
  mdiNoteEdit,
  mdiMagnify,
  mdiStar,
  mdiStarOutline,
} from "@mdi/js";

export function DeleteIcon({ color, size }) {
    return (
      <Icon path={mdiTrashCan} className="delete-icon" color={color} size={size} />
    );
  }

  export function NoteIcon({ color, size }) {
    return (
      <Icon path={mdiNoteEdit} className="note-icon" color={color} size={size} />
    );
  }

  export function SearchIcon({ color, size }) {
    return (
      <Icon path={mdiMagnify} className="search-icon" color={color} size={size} />
    );
  }

   export function StarFilledIcon({ color, size }) {
     return (
       <Icon
         path={mdiStar}
         className="star-icon"
         color={color}
         size={size}
       />
     );
   }

    export function StarOutlinedIcon({ color, size }) {
      return (
        <Icon
          path={mdiStarOutline}
          className="star-icon"
          color={color}
          size={size}
        />
      );
    }