import Banner from "components/Banner/Banner";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return(
        <main>
            <Banner />

            <Outlet />
        </main>
    );
}

export default MainPage;