import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";
import Link from "next/link";
import { StretchedButton } from "../../ComponentIndex";

const contentRecurrsion = (contents) => {
  return contents.map((content, index) => {
    const hasSubContent = typeof content.contents === "object";

    if (content.type === "paragraph container") {
      return (
        <div
          key={index}
          className={
            content.indent && styles["paragraph-content--container-with-indent"]
          }
        >
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </div>
      );
    }

    if (content.type === "paragraph") {
      return (
        <span key={index} className={styles["paragraph-content"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </span>
      );
    }

    if (content.type === "paragraph bold") {
      return (
        <span key={index} className={styles["paragraph-content--bold"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </span>
      );
    }

    if (content.type === "paragraph hyperlink") {
      return (
        <span key={index}>
          <Link href={content.link}>
            <a
              target="_blank"
              className={styles["paragraph-content--hypertext"]}
            >
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </a>
          </Link>
        </span>
      );
    }

    if (content.type === "hyperlink") {
      return (
        <div key={index} className={styles["hyperlink"]}>
          <Link href={content.link}>
            <a target="_blank" className={styles["content-hypertext"]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </a>
          </Link>
        </div>
      );
    }

    if (content.type === "hyperlink large") {
      return (
        <div key={index}>
          <Link href={content.link}>
            <a target="_blank" className={styles["content-hypertext--large"]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </a>
          </Link>
        </div>
      );
    }

    if (content.type === "stretched button") {
      return (
        <div key={index} className={styles["stretched-button"]}>
          <StretchedButton label={content.contents} href={content.link} />
        </div>
      );
    }

    if (content.type === "table") {
      return (
        <table key={index} className={styles["table"]}>
          <tbody>
            {hasSubContent
              ? contentRecurrsion(content.contents)
              : content.contents}
          </tbody>
        </table>
      );
    }

    if (content.type === "table row") {
      return (
        <tr key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </tr>
      );
    }

    if (content.type === "table header") {
      return (
        <th key={index} colSpan={content.colspan}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </th>
      );
    }

    if (content.type === "table cell") {
      return (
        <td key={index} colSpan={content.colspan}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </td>
      );
    }

    if (content.type === "ordered list") {
      switch (content.listType) {
        case "lowercase letter":
          return (
            <ol key={index} className={styles["orderedList"]} type="a">
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );

        case "uppercase letter":
          return (
            <ol key={index} className={styles["orderedList"]} type="A">
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );

        default:
          return (
            <ol key={index} className={styles["orderedList"]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );
      }
    }

    if (content.type === "unordered list") {
      return (
        <div key={index}>
          <ul key={index} className={styles["unorderedList"]}>
            {hasSubContent
              ? contentRecurrsion(content.contents)
              : content.contents}
          </ul>
        </div>
      );
    }

    if (content.type === "list item") {
      return (
        <li key={index} className={styles["listItem"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </li>
      );
    }

    if (content.type === "description list") {
      return (
        <dl key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dl>
      );
    }

    if (content.type === "description term") {
      return (
        <dt key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dt>
      );
    }

    if (content.type === "description data") {
      return (
        <dd key={index} className={styles["descriptionData"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dd>
      );
    }

    if (content.type === "title") {
      var underline = "";
      if (content.underline) {
        underline = "-underlined";
      }

      switch (content.align) {
        case "left":
          return (
            <h2 key={index} className={styles["title--align-left" + underline]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </h2>
          );

        case "right":
          return (
            <h2
              key={index}
              className={styles["title--align-right" + underline]}
            >
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </h2>
          );

        default:
          return (
            <h2
              key={index}
              className={styles["title--align-center" + underline]}
            >
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </h2>
          );
      }
    }

    if (content.type === "title large") {
      return (
        <h1 key={index} className={styles["title--large"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </h1>
      );
    }

    if (content.type === "title italized") {
      return (
        <h2 key={index} className={styles["title-italized"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </h2>
      );
    }
  });
};

const InitiativeContent = ({ content }) => {
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {contentRecurrsion(content)}
      </motion.div>
    </>
  );
};

export default InitiativeContent;
