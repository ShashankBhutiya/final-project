

/* Posts.jsx */
import { useEffect, useState } from "react";
import styles from "./Posts.module.css";

export default function Posts() {
  const [problem, setProblem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://6805818eca467c15be693938.mockapi.io/ps/one'
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProblem(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Problems Solved by Users</h2>
        {problem.length === 0 ? (
          <p className={styles.empty}>No Problem Posted Yet.</p>
        ) : (
          problem.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

