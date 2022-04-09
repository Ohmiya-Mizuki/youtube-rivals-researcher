import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import useSWR from "swr";
import { researchChannel } from "@/pages/api/researchChannel";
import Image from "next/image";

const Result = () => {
  const router = useRouter();
  const channelId = router.query.channelId;
  const { data, error } = useSWR(channelId, researchChannel);

  if (error)
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to YTRR!</h1>
        </main>
      </div>
    );

  if (!data)
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to YTRR!</h1>
        </main>
      </div>
    );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to YTRR!</h1>
      </main>
    </div>
  );
};

export default Result;
