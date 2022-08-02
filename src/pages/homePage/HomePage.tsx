import { createContext, useCallback, useEffect, useState } from "react";
import { ProdByCat } from "../../models/products/productsByCategory";
import { getProductByCategory } from "../../services/products/getProductByCategory";
import { Home } from "./Home";
type HomePageTypes = {
  electronic: ElectronicProps;
};
export const HomePageContext = createContext({} as HomePageTypes);
interface ElectronicProps {
  isLoading: boolean;
  electronic: {
    error: boolean;
    data: ProdByCat[];
  };
}

export const HomePage = () => {
  const [electronic, setElectronic] = useState<ElectronicProps>({
    isLoading: true,
    electronic: { error: false, data: [] },
  });

  const electronicData = async (controller: AbortController) => {
    const electronicResponse = await getProductByCategory(controller, 2);
    if (electronicResponse.status !== 200) {
      return {
        error: true,
        data: [],
      };
    }
    return {
      error: false,
      data: electronicResponse?.data,
    };
  };

  const dataController = useCallback(async (controller: AbortController) => {
    const electronicClean = await electronicData(controller);
    setElectronic({
      isLoading: false,
      electronic: electronicClean,
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (electronic.isLoading) {
      dataController(controller);
    }
    return () => {
      controller.abort();
    };
  }, [dataController, electronic.isLoading]);

  return (
    <HomePageContext.Provider
      value={{
        electronic,
      }}
    >
      <Home />
    </HomePageContext.Provider>
  );
};
