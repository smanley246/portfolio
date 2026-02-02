/*
  * File: src/pages/WorkDetailPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Work Detail page for the portfolio website.
*/

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Components
import CircuitCanvasComponent from "../../components/CircuitBackground";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

// Data
import { getWorkBySlug } from "../../data/workData/workData";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

export default function WorkDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const role = slug ? getWorkBySlug(slug) : undefined;

  return (
    <>
      <CircuitBackground />
      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <div className="px-6 py-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between gap-3 mb-6">
                <button
                  onClick={() => navigate(-1)}
                  className={`${chipBase} px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-white`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>

              {!role ? (
                <Card>
                  <h1 className="text-xl font-semibold">Role not found</h1>
                  <p className="mt-2 text-sm text-blue-100/80">
                    That URL does not match any role slug in your work data.
                  </p>
                </Card>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    {/* Logo */}
                    <div
                    className="
                        w-24 h-24
                        rounded-2xl
                        overflow-hidden
                        bg-white/20
                        border border-white/30
                        flex items-center justify-center
                        flex-shrink-0
                    "
                    >
                    {role.logo?.src ? (
                        <img
                        src={role.logo.src}
                        alt={role.logo.alt}
                        className="w-full h-full object-contain p-1 scale-110"
                        draggable={false}
                        loading="lazy"
                        />
                    ) : (
                        <div className="text-xs text-white/60">Logo</div>
                    )}
                    </div>

                    <div className="min-w-0">
                      <h1 className="text-3xl lg:text-4xl font-bold">
                        {role.title}
                      </h1>
                      <div className="text-sm text-blue-200/80 mt-2">
                        {role.place} •{" "}
                        <span className="text-white">{role.when}</span>
                      </div>
                    </div>
                  </div>

                  <Card>
                    <h2 className="text-lg font-semibold mb-3">
                      Responsibilities & Impact
                    </h2>
                    <ul className="list-disc ml-5 text-sm space-y-2 text-blue-100/90">
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
