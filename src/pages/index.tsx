import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  const [channelId, setChannelId] = useState("");
  const router = useRouter();

  const clickButton = () => {
    //未入力の時
    if (!channelId) {
      return;
    }

    router.push({
      pathname: "/result", //URL
      query: { channelId: channelId }, //検索クエリ
    });
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "13") clickButton();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to YTRR!</h1>
        <input
          type="text"
          value={channelId}
          onChange={(e) => setChannelId(e.target.value)}
          /*変更時keywordに値をセット  */
          onKeyPress={(e) => keyPress(e)}
          className="w-4/5 h-12 border-2 p-4"
          placeholder="Search"
        />
        <button
          onClick={clickButton}
          disabled={!channelId}
          className="bg-base-color w-1/5"
        >
          {" "}
          {/*入力項目が未入力の場合、非活性*/}
          検索
        </button>
      </main>
    </div>
  );
};

export default Home;
