"use client";

import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ErrorPopup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 bg-red-500 text-white text-xl pl-3 py-2 pr-5 rounded-xl shadow-lg inline-flex items-center justify-center space-x-2 z-50 animate-fade-in-down">
      <XMarkIcon className="cursor-pointer size-6" onClick={onClose} />
      <span>{message}</span>
    </div>
  );
}
