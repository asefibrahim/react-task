import React, { useState } from "react";

const Problem2 = () => {
  // States for managing checkbox states in both modals
  const [isEvenOnlyModal3, setIsEvenOnlyModal3] = useState(false);
  const [isEvenOnlyModal4, setIsEvenOnlyModal4] = useState(false);

  // Hypothetical contacts data
  const [contacts] = useState([
    { id: 1, name: "Contact 1" },
    { id: 2, name: "Contact 2" },
    { id: 3, name: "Contact 3" },
    { id: 4, name: "Contact 4" },
    // Add more contacts as needed
  ]);

  // Filter contacts based on checkbox state
  const getFilteredContacts = (isEvenOnly) =>
    contacts.filter((contact) => (isEvenOnly ? contact.id % 2 === 0 : true));

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            All Contacts
          </button>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            US Contacts
          </button>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Buttons and filtered contacts for Modal 3 */}
            <div className="flex gap-2">
              <button className="btn-primary btn">All Contacts</button>
              <button className="btn-primary btn">US Contacts</button>
            </div>
            {getFilteredContacts(isEvenOnlyModal3).map((contact) => (
              <p key={contact.id}>{contact.name}</p>
            ))}
            <label className="self-start">
              <input
                type="checkbox"
                checked={isEvenOnlyModal3}
                onChange={() => setIsEvenOnlyModal3(!isEvenOnlyModal3)}
              />{" "}
              Only Even
            </label>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello! Baby</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          {/* Display filtered contacts for Modal 4 */}
          <div className="flex flex-col items-center">
            {getFilteredContacts(isEvenOnlyModal4).map((contact) => (
              <p key={contact.id}>{contact.name}</p>
            ))}
            <label className="self-start mt-4">
              <input
                type="checkbox"
                checked={isEvenOnlyModal4}
                onChange={() => setIsEvenOnlyModal4(!isEvenOnlyModal4)}
              />{" "}
              Only Even
            </label>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Problem2;
