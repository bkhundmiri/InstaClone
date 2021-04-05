import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete/ModalDelete";

import "./Modal.css";

export default function Modal(props) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { post, open, setOpen, handleDelete } = props;

  return (
    <div className="modal-container" onClick={(e) => setOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-button modal-delete-button"
          onClick={() => {
            setDeleteOpen(true);
          }}
        >
          Delete
        </div>

        <Link to={`/posts/${post.id}/edit`}>
          <div className="modal-button" onClick={() => setOpen(false)}>
            Edit
          </div>
        </Link>

        <div
          className="modal-button modal-cancel"
          onClick={() => setOpen(false)}
        >
          Cancel
        </div>
        {deleteOpen && open ? (
          <ModalDelete
            open={open}
            handleDelete={handleDelete}
            setDeleteOpen={setDeleteOpen}
            setOpen={setOpen}
          />
        ) : null}
      </div>
    </div>
  );
}
