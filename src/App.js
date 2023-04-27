import Button from "./components/Button";
import Search1 from "./components/search/Search1";
import Search2 from "./components/search/Search2";
import Search3 from "./components/search/Search3";

import React, { useState } from "react";

import Modal2 from "./components/dialog/Modal2";

export default function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-60">
            <h1 className="text-2xl font-bold">
                Click on the button to open the modal.
            </h1>
            <button
                className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
                type="button"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Open Modal
            </button>

            {showModal && <Modal2 setOpenModal={setShowModal} />}
        </div>
    );
}
