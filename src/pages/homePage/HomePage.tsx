import { createContext, useCallback, useEffect, useState } from "react";
import { ProdByCat } from "../../models/products/productsByCategory";
import { getProductByCategory } from "../../services/products/getProductByCategory";
import { Home } from "./Home";
export {};

type HomePageTypes = {
  electronic: ElectronicProps;
  muebles: MueblesProps;
};

export const HomePageContext = createContext({} as HomePageTypes);
interface ElectronicProps {
  isLoading: boolean;
  electronic: {
    error: boolean;
    data: ProdByCat[];
  };
}
interface MueblesProps {
  isLoading: boolean;
  muebles: {
    error: boolean;
    data: ProdByCat[];
  };
}

export const HomePage = () => {
  const [electronic, setElectronic] = useState<ElectronicProps>({
    isLoading: true,
    electronic: { error: false, data: [] },
  });
  const [muebles, setMuebles] = useState<MueblesProps>({
    isLoading: true,
    muebles: { error: false, data: [] },
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
  const mueblesData = async (controller: AbortController) => {
    const mueblesResponse = await getProductByCategory(controller, 1);
    if (mueblesResponse.status !== 200) {
      return {
        error: true,
        data: [],
      };
    }
    return {
      error: false,
      data: mueblesResponse?.data,
    };
  };

  const dataController = useCallback(async (controller: AbortController) => {
    const electronicClean = await electronicData(controller);
    const mueblesClean = await mueblesData(controller);

    setElectronic({
      isLoading: false,
      electronic: electronicClean,
    });
    setMuebles({
      isLoading: false,
      muebles: mueblesClean,
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (electronic.isLoading && muebles.isLoading) {
      dataController(controller);
    }
    return () => {
      controller.abort();
    };
  }, [dataController, electronic.isLoading, muebles.isLoading]);
  return (
    <HomePageContext.Provider
      value={{
        electronic,
        muebles,
      }}
    >
      <Home />
    </HomePageContext.Provider>
  );
};
