import { LatestProducts } from "@/widgets/product";
import styles from "./styles.module.css";
import { useBannerBuilder } from "@/widgets/main/utils/bannerBuilder";

const MainPage = () => {
    console.log("--render MainPage")

    const onClick = () => console.log('Click')

    const bannerBuilder = useBannerBuilder()
        .setTitle("Gold big hoops")
        .setPrice("199.99")
        .setButton("View product")
        .setOnClick(onClick);

    const Banner = bannerBuilder.build();
    bannerBuilder.clearRefs();

    return (
        <main className={styles.main}>
            {Banner}

            <LatestProducts />
        </main>
    )
}

export default MainPage;