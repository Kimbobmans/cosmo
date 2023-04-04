import { useState, useEffect } from "react";
import restAPI from "api/restAPI";
import restURI from "json/restURI.json";
import GetCboParams from "api/GetCboParams";

let processList = [];
const useProcess = () => {
  const [processOpt, setProcessOpt] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      await restAPI.get(restURI.process).then((res) => {
        setProcessOpt(res?.data?.data?.rows);
        processList = res?.data?.data?.rows.map((data) => {
          return GetCboParams("Process", data);
        });
      });
    };
    getCboOpt();
  }, []);
  return [processOpt, processList];
};
let productGbnList = [];
const useProductGbn = () => {
  const [productGbnOpt, setProductGbnOpt] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      await restAPI.get(restURI.productGbn).then((res) => {
        setProductGbnOpt(res?.data?.data?.rows);
        productGbnList = res?.data?.data?.rows.map((data) => {
          return GetCboParams("ProductGbn", data);
        });
      });
    };
    getCboOpt();
  }, []);
  return [productGbnOpt, productGbnList];
};
let productModelList = [];
const useProductModel = () => {
  const [productModelOpt, setProductModelOpt] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      await restAPI.get(restURI.productModel).then((res) => {
        setProductModelOpt(res?.data?.data?.rows);
        productModelList = res?.data?.data?.rows.map((data) => {
          return GetCboParams("ProductModel", data);
        });
      });
    };
    getCboOpt();
  }, []);
  return [productModelOpt, productModelList];
};
let productTypeList = [];
const useProductType = () => {
  const [productTypeOpt, setProductTypeOpt] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      await restAPI.get(restURI.productType).then((res) => {
        setProductTypeOpt(res?.data?.data?.rows);
        productTypeList = res?.data?.data?.rows.map((data) => {
          return GetCboParams("ProductType", data);
        });
      });
    };
    getCboOpt();
  }, []);
  return [productTypeOpt, productTypeList];
};
let productTypeSmallList = [];
const useProductTypeSmall = () => {
  const [productTypeSmallOpt, setProductTypeSmallOpt] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      await restAPI.get(restURI.productTypeSmall).then((res) => {
        setProductTypeSmallOpt(res?.data?.data?.rows);
        productTypeSmallList = res?.data?.data?.rows.map((data) => {
          return GetCboParams("ProductTypeSmall", data);
        });
      });
    };
    getCboOpt();
  }, []);
  return [productTypeSmallOpt, productTypeSmallList];
};

export {
  useProcess,
  useProductGbn,
  useProductModel,
  useProductType,
  useProductTypeSmall,
};
