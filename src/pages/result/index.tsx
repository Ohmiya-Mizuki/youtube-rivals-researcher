import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import { researchChannel } from "@/pages/api/researchChannel";

const Result = () => {
  const router = useRouter();
  const channelId = router.query.channelId;
  const { data, error } = useSWR(channelId, researchChannel);

  if (error)
    return (
      // <div className={styles.container}>
      //   <main className={styles.main}>
      //     <h1 className={styles.title}>Welcome to YTRR!</h1>
      //   </main>
      // </div>
      <div>hello</div>
    );

  if (!data)
    return (
      // <div className={styles.container}>
      //   <main className={styles.main}>
      //     <h1 className={styles.title}>Welcome to YTRR!</h1>
      //   </main>
      // </div>
      <div>hello</div>
    );

  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>Welcome to YTRR!</h1>
    //   </main>
    // </div>
    <div>hello</div>
  );
};

export default Result;
