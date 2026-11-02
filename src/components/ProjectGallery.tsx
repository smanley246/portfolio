import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Project } from "../data/projectData/projectData";
import CustomButton from "./CustomButton";

export default function ProjectGallery({ project }: { project: Project }) {
  const media = project.media?.length
    ? project.media
    : project.preview ? [{ type: "image" as const, src: project.preview, alt: `${project.name} preview` }] : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const active = media[activeIndex];
  const move = (direction: number) => setActiveIndex((index) => (index + direction + media.length) % media.length);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    inlineVideoRef.current?.pause();
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [isOpen]);

  if (!active) return null;

  const renderMedia = (expanded = false) => active.type === "video" ? (
    <video ref={expanded ? undefined : inlineVideoRef} key={active.src} src={active.src} controls playsInline preload="metadata" aria-label={active.alt || `${project.name} video`} className={`h-full w-full object-contain ${expanded ? "max-h-[70dvh]" : ""}`} />
  ) : (
    <img src={active.src} alt={active.alt || project.name} className={`h-full w-full object-contain ${expanded ? "max-h-[70dvh]" : ""}`} draggable={false} />
  );

  const navigation = () => media.length > 1 && (
    <>
      <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/75 p-3 text-white" aria-label="Previous media"><ChevronLeft aria-hidden="true" /></button>
      <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/75 p-3 text-white" aria-label="Next media"><ChevronRight aria-hidden="true" /></button>
    </>
  );

  return (
    <>
      <div className="project-gallery">
        <div className="project-gallery__bar"><span>{project.name}</span><span aria-live="polite">{activeIndex + 1} / {media.length}</span></div>
        <figure>
          <div className="media-frame relative">
            <div className="project-gallery__stage">
              {active.type === "image" ? (
                <button type="button" className="h-full w-full cursor-zoom-in" onClick={() => setIsOpen(true)} aria-label="Open gallery">{renderMedia()}</button>
              ) : renderMedia()}
            </div>
            {navigation()}
            <button type="button" onClick={() => setIsOpen(true)} className="absolute right-3 top-3 rounded-full bg-black/75 p-3 text-white" aria-label="Expand current media"><Expand className="h-5 w-5" aria-hidden="true" /></button>
          </div>
          {active.caption && <figcaption className="prose-copy px-5 py-4 text-sm" aria-live="polite">{active.caption}</figcaption>}
        </figure>
        {media.length > 1 && (
          <div className="project-gallery__thumbnails">
            {media.map((item, index) => (
              <button key={item.src} type="button" onClick={() => setActiveIndex(index)} aria-label={`Select media ${index + 1}: ${item.alt || project.name}`} aria-pressed={index === activeIndex} className={`overflow-hidden rounded-xl border-2 ${index === activeIndex ? "border-[var(--color-accent)]" : "border-transparent"}`}>
                {item.type === "image" ? <img src={item.src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover object-top" /> : <span className="flex aspect-[4/3] items-center justify-center bg-black/60 text-xs">Video</span>}
              </button>
            ))}
          </div>
        )}
      </div>
      <dialog
        ref={dialogRef}
        className="project-gallery-dialog"
        aria-label={`${project.name} gallery`}
        onClose={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, video[controls]');
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
          if (media.length < 2 || event.target instanceof HTMLVideoElement) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {isOpen && (
          <div className="modal-panel overflow-hidden rounded-[1.5rem]">
            <div className="flex items-center justify-between gap-4 px-5 py-3">
              <span className="text-sm text-white">{project.name} · {activeIndex + 1} / {media.length}</span>
              <CustomButton onClick={() => setIsOpen(false)}><X className="h-4 w-4" aria-hidden="true" /> Close</CustomButton>
            </div>
            <div className="relative flex h-[65dvh] items-center justify-center bg-black/35">
              {renderMedia(true)}
              {navigation()}
            </div>
            {active.caption && <p className="prose-copy px-5 py-4 text-sm" aria-live="polite">{active.caption}</p>}
          </div>
        )}
      </dialog>
    </>
  );
}
