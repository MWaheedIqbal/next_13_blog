import { posts } from '../../../data/posts';
import styles from "./page.module.css"; 

export default function Post({params}: {params:{id: string}}) {
    const { id } = params;
    return (
    <main className={styles.main}>
      <div className={styles.center}>
      </div>
    </main>
  )
}