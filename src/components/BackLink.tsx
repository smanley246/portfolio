import { ArrowLeft } from "lucide-react";
import CustomButton from "./CustomButton";

export default function BackLink({ to, children }: { to: string; children: string }) {
  return <div className="detail-back"><CustomButton to={to}><ArrowLeft className="h-4 w-4" aria-hidden="true" />{children}</CustomButton></div>;
}
