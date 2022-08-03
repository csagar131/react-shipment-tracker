import LandingSearchPage from "~/page-components/landing-search-page";
import PickrrHeader from "../page-components/pickrr-header";
import { useLoaderData } from "@remix-run/react";
import DataContext from "../context/data-context";
import { getSellerBrandDetails } from "../utils/server.query";
import { Outlet } from "@remix-run/react";
import { MainContainer } from "../page-components/landing-search-page/style";
import  SellerProductDetails  from '../components/SellerProductDetails'
import FooterDetails from '../components/FooterDetails'
import { Container } from "../components/UIElements";
import { useParams } from 'react-router-dom';


export const loader = async () => {
  const data = await getSellerBrandDetails();
  return data;
};

function Layout({ children }) {
  return (
    <>
      <PickrrHeader />
      <div className="container"> {children}</div>
      <Container>
        <MainContainer style={{ padding: "0", background: "transparent" }}>
          <SellerProductDetails />
          <FooterDetails />
        </MainContainer>
      </Container>
    </>
  );
}

function Home() {
  const data = useLoaderData();
  const params = useParams();
  return (
    <DataContext.Provider value={{ sellerData: data.res }}>
      <Layout>
        {params.index? <Outlet/> : <LandingSearchPage />}
      </Layout>
    </DataContext.Provider>
  );
}

export default Home;
