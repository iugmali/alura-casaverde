import styles from './Home.module.scss';
import Produtos from "./Produtos";
import Videos from "./Videos";
import Header from "../../patterns/Header";
import Footer from "../../patterns/Footer";
import Chamada from "./Chamada";
import ComoConseguir from "./ComoConseguir";


export default function Home() {
    return (
      <div className={styles.container}>
        <Header />
        <Chamada />
        <ComoConseguir />
        <Produtos />
        <Videos />
        <Footer />
      </div>
    );
}