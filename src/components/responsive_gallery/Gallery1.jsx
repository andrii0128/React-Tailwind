import React from "react";

export default function Gallery1() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
                className="object-cover w-full border"
                src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
            />
            <img
                className="object-cover w-full border"
                src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
            />
            <img
                className="object-cover w-full border"
                src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
            />
            <img
                className="object-cover w-full border"
                src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
            />
        </div>
    );
}