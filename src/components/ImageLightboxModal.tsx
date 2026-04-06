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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(7,17,31,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close expanded image"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-950/80 p-4 sm:p-6">
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
