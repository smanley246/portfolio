/*
  * File: src/pages/WorkDetailPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the Work Detail page for the portfolio website.
*/

import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { getWorkBySlug } from "../../data/workData/workData";

export default function WorkDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getWorkBySlug(slug) : undefined;

  return (
    <div className="site-container max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {!role ? (
          <Card>
            <h1 className="text-xl font-semibold">Role not found</h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              That URL does not match any role slug in your work data.
            </p>
          </Card>
        ) : (
          <>
            <div className="mb-8 grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)] lg:items-center">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/8 sm:h-36 sm:w-36">
                {role.logo?.src ? (
                  <img
                    src={role.logo.src}
                    alt={role.logo.alt}
                    className="h-full w-full object-contain p-3"
                    draggable={false}
                    loading="lazy"
                  />
                ) : (
                  <div className="text-xs text-white/60">Logo</div>
                )}
              </div>

              <div className="min-w-0">
                <p className="page-intro__eyebrow">Role Detail</p>
                <h1 className="mb-4 overflow-hidden text-ellipsis whitespace-nowrap text-4xl font-extrabold leading-none tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  {role.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                  {role.place} • {role.when}
                </p>
              </div>
            </div>

            <Card className="max-w-none">
              <h2 className="mb-4 text-lg font-semibold">Responsibilities and impact</h2>
              <ul className="ml-5 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          </>
        )}
    </div>
  );
}
