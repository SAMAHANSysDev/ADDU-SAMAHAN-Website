import React from "react";
import Image from "next/image";
import {
  GimmicksButton,
  AfyopGimmickSection,
  AFYOPLabel,
  AFYOPButton,
} from "../../ComponentIndex";
import styles from "./AFYOPGimmicks.module.scss";

const AFYOPGimmicks = ({
  firstP,
  secondP,
  thirdP,
  fHeading,
  sHeading,
  tHeading,
  fPicture,
  sPicture,
  tPicture,
}) => {
  return (
    <div className={styles["AFYOPGimmicks"]}>
      {/* <div className={styles["background"]}>
        <div className={styles["outerContainer"]}>
          <div className={styles["container"]}>
            <div className={styles["section"]}>
              <AfyopGimmickSection
                text={firstP}
                heading={fHeading}
                pic={fPicture}
              />

              <a href=" https://tinyurl.com/AFYOPSimulaStart-upKit ">
                <GimmicksButton title="CLICK TO VIEW" variant="default" />
              </a>
            </div>

            <div className={styles["section"]}>
              <AfyopGimmickSection
                text={secondP}
                heading={sHeading}
                pic={sPicture}
              />
              <a href="https://tinyurl.com/AFYOPSimulaScrapbook  ">
                <GimmicksButton title="CLICK TO VIEW" variant="default" />
              </a>
            </div>

            <div className={styles["section"]}>
              <AfyopGimmickSection
                text={thirdP}
                heading={tHeading}
                pic={tPicture}
              />
              <a href="https://tinyurl.com/AFYOPLateNights ">
                <GimmicksButton title="JOIN DISCORD SERVER" variant="default" />
              </a>
            </div>
          </div>
        </div> */}
      <div className={styles["label"]} id="FaciFinder">
          <AFYOPLabel variant='h1' title="GIMMICKS" />
      </div>

      <div className="container">
        <div className={styles["frost-bg"]}>
          <div className={styles["child-1"]}>
            <div className={styles["icon"]}>
              <Image.default
                src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Webpage%2FAFYOP%20Gimmicks%2F2%5B1%5D.png?alt=media&token=1cbbf032-955e-4791-8692-0e90c0890bb7"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles["group"]}>
              <AFYOPLabel title={fHeading} />
              <p className={styles["description"]}>{firstP}</p>
              <a
                href="https://tinyurl.com/AFYOPSimulaStart-upKit"
                rel="noopener noreferrer"
              >
                <AFYOPButton title={"CLICK TO VIEW"} variant="purple" />
              </a>
            </div>
          </div>

          <div className={styles["child-2"]}>
            <div className={styles["icon"]}>
              <Image.default
                src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Webpage%2FAFYOP%20Gimmicks%2FViewer's%20Kit.png?alt=media&token=cfc3cc81-5ab1-4cdd-9340-f5349bad28cf"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles["group"]}>
              <AFYOPLabel title={sHeading} />
              <p className={styles["description"]}>{secondP}</p>
              <a
                href="https://tinyurl.com/AFYOPSimulaScrapbook"
                rel="noopener noreferrer"
              >
                <AFYOPButton title={"CLICK TO VIEW"} variant="purple" />
              </a>
            </div>
          </div>

          <div className={styles["child-3"]}>
            <div className={styles["icon"]}>
              <Image.default
                src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Webpage%2FAFYOP%20Gimmicks%2FGame%20Nights.png?alt=media&token=f5b9821a-2490-430a-b4cd-81d7149ff75a"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles["group"]}>
              <AFYOPLabel title={tHeading} />
              <p className={styles["description"]}>{thirdP}</p>
              <a href="https://tinyurl.com/AFYOPLateNights">
                <AFYOPButton title={"JOIN DISCORD SERVER"} variant="purple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AFYOPGimmicks;
