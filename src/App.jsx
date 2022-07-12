import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import {Post} from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
            author="Davi Freitas" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis minus eligendi, cumque hic, libero facilis commodi nam, sint deserunt sed obcaecati! Quod, recusandae nostrum quia perferendis eum quibusdam quas eligendi." 
          />
          <Post 
            author="Gabriel buzzi" 
            content="Um novo post muito legal." 
          />
        </main>
      </div>
    </div>
  )
}

