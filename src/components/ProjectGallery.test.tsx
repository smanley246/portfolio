// @vitest-environment jsdom
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ProjectGallery from "./ProjectGallery";
import type { Project } from "../data/projectData/projectData";

const project: Project = {
  slug: "example", name: "Example", blurb: "A project", tags: [], completed: "2026",
};

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
  Object.defineProperties(HTMLDialogElement.prototype, {
    showModal: { configurable: true, value: vi.fn(function (this: HTMLDialogElement) {
      this.setAttribute("open", "");
    }) },
    close: { configurable: true, value: vi.fn(function (this: HTMLDialogElement) {
      this.removeAttribute("open");
    }) },
  });
});

afterEach(async () => {
  await act(() => root.unmount());
  container.remove();
  Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal");
  Reflect.deleteProperty(HTMLDialogElement.prototype, "close");
});

describe("project gallery", () => {
  it("omits the gallery when a project has no media or preview", async () => {
    await act(() => root.render(<ProjectGallery project={project} />));
    expect(container.innerHTML).toBe("");
  });

  it("uses the preview as a single image without navigation controls", async () => {
    await act(() => root.render(<ProjectGallery project={{ ...project, preview: "/preview.png" }} />));
    expect(container.querySelector("img")?.getAttribute("src")).toBe("/preview.png");
    expect(container.querySelector('[aria-label="Next media"]')).toBeNull();
    expect(container.querySelector(".project-gallery__thumbnails")).toBeNull();
  });

  it("supports video controls and accessible media selection", async () => {
    await act(() => root.render(<ProjectGallery project={{ ...project, media: [
      { type: "image", src: "/image.png", alt: "Prototype" },
      { type: "video", src: "/demo.mp4", alt: "Demonstration" },
    ] }} />));
    await act(() => container.querySelector<HTMLButtonElement>('[aria-label="Select media 2: Demonstration"]')?.click());
    expect(container.querySelector("video")?.controls).toBe(true);
    expect(container.querySelector("video")?.playsInline).toBe(true);
    expect(container.querySelector('[aria-label="Select media 2: Demonstration"]')?.getAttribute("aria-pressed")).toBe("true");
  });

  it("cycles expanded media and restores focus and scrolling on cancellation", async () => {
    await act(() => root.render(<ProjectGallery project={{ ...project, media: [
      { type: "image", src: "/one.png", caption: "First image" },
      { type: "image", src: "/two.png", caption: "Second image" },
    ] }} />));
    const opener = container.querySelector<HTMLButtonElement>('[aria-label="Expand current media"]')!;
    opener.focus();
    await act(() => opener.click());
    const dialog = container.querySelector("dialog")!;
    expect(dialog.open).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    await act(() => dialog.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true })));
    expect(dialog.querySelector("img")?.getAttribute("src")).toBe("/two.png");
    expect(dialog.textContent).toContain("Second image");
    await act(() => dialog.dispatchEvent(new Event("cancel")));
    expect(dialog.open).toBe(false);
    expect(document.activeElement).toBe(opener);
    expect(document.body.style.overflow).toBe("");
  });
});
