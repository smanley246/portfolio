import React from "react";
import { motion } from "framer-motion";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

const PageIntro: React.FC<PageIntroProps> = ({
  eyebrow,
  title,
  description,
  actions,
}) => {
  return (
    <motion.section
      className="page-intro"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {eyebrow ? <p className="page-intro__eyebrow">{eyebrow}</p> : null}
      <h1 className="page-intro__title">{title}</h1>
      {description ? <p className="page-intro__description">{description}</p> : null}
      {actions ? <div className="page-intro__actions">{actions}</div> : null}
    </motion.section>
  );
};

export default PageIntro;
