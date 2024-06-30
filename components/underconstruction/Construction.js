import { OutlineButton } from "../buttons/OutlineButton";
import { Contact } from "../home/contact/Contact";
import { Heading } from "../nav/Heading";
import styles from "./construction.module.scss";
import React from 'react';

export const Construction = () => {
  return (
    <div className={styles.constructionWrapper}>
      <Heading />
      <h1 className={styles.constructionTitle}>
        Sorry<span>!</span>
      </h1>
      <h2 className={styles.constructionTitle2}>Page is currently under maintanence, we will be back shortly<span>.</span></h2>
      <p className={styles.constructionText}>
        Summary of my experiences available below<span>:</span>
      </p>
      <div className={styles.resumeButton}>
        <OutlineButton onClick={() => window.open("/useResume.pdf")}>My Resume</OutlineButton>
      </div>
      <h4 className={styles.contactTitleSmall}>
        Contact me<span>:</span>
      </h4>
      <div className={styles.contactEmail}>
        <a href="mailto:razeen.ali@mail.utoronto.ca">razeen.ali@mail.utoronto.ca</a>
      </div>
    </div>
  );
};
