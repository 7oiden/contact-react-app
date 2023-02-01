import Icon from "@mdi/react";
import { mdiTrashCan, mdiNoteEdit, mdiMagnify } from '@mdi/js';

export function DeleteIcon({ color, size }) {
    return (
      <Icon path={mdiTrashCan} className="delete-icon" color={color} size={size} />
    );
  }

  export function EditIcon({ color, size }) {
    return (
      <Icon path={mdiNoteEdit} className="delete-icon" color={color} size={size} />
    );
  }

  export function SearchIcon({ color, size }) {
    return (
      <Icon path={mdiMagnify} className="delete-icon" color={color} size={size} />
    );
  }