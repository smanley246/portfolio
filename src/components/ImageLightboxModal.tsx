/*
  * File: src/components/ImageLightboxModal.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Shared fullscreen image lightbox modal used across portfolio sections.
*/

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

type Props = {
  image: LightboxImage | null;
  onClose: () => void;
};

const ImageLightboxModal: React.FC<Props> = ({ image, onClose }) => {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="modal-scrim fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-panel relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem]"
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  {image.title ?? image.alt}
                </p>
                {image.caption ? (
                  <p className="mt-1 text-xs text-[var(--color-text-soft)]">
                    {image.caption}
                  </p>
                ) : (
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
                    Press Esc or use close
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="icon-control h-11 w-11 text-white"
                aria-label="Close expanded image"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-[rgba(1,8,16,0.68)] p-4 sm:p-6">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[78vh] w-full object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ImageLightboxModal;
