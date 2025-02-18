import { useCookies } from "react-cookie";
import GetInputSearchParams from "api/GetInputSearchParams";
import GetCboSearchParams from "api/GetCboSearchParams";
import GetDateParams from "api/GetDateParams";
import GetIncludeHeader from "api/GetIncludeHeader";
import GetInputSearchReadOnly from "api/GetInputSearchReadOnly";
import restAPI from "api/restAPI";
/**
 * 🔸Edit 사용 화면에서 검색조건 Input Box만 있을 때 사용
 */
const useSearch = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  setGridData,
  disableRowToggle,
  setDisableRowToggle,
  uri
) => {
  const actSearch = async () => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const readURI = uri + inputParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setDisableRowToggle(!disableRowToggle);
        setIsBackDrop(false);
      }
    }
  };
  return [actSearch];
};
/**
 * 🔸Edit 사용 화면에서 검색조건 Input Box + Cbo 있을 때 사용
 */
const useSearchCbo = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  setGridData,
  disableRowToggle,
  setDisableRowToggle,
  comboValue,
  uri
) => {
  const actSearchCbo = async () => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const cboParams = GetCboSearchParams(inputParams, comboValue);
        const readURI = uri + cboParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setDisableRowToggle(!disableRowToggle);
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchCbo];
};
/**
 * 🔸Edit 사용 화면에서 검색조건 Input Box + Cbo + Date 있을 때 사용
 */
const useSearchCboDate = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  setGridData,
  disableRowToggle,
  setDisableRowToggle,
  comboValue,
  dateText,
  uri
) => {
  const actSearchCboDate = async (startDateNm, endDateNm) => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const cboParams = GetCboSearchParams(inputParams, comboValue);
        const dateParams = GetDateParams(
          cboParams,
          dateText,
          startDateNm,
          endDateNm
        );
        const readURI = uri + dateParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setDisableRowToggle(!disableRowToggle);
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchCboDate];
};
/**
 * 🔸Edit 사용 안 하는 화면에서 검색조건 Input Box + Cbo 있을 때 사용
 */
const useSearchOnlyCbo = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  setGridData,
  comboValue,
  uri
) => {
  const actSearchOnlyCbo = async () => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const cboParams = GetCboSearchParams(inputParams, comboValue);
        const readURI = uri + cboParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchOnlyCbo];
};
/**
 * 🔸Edit 사용 안 하는 화면에서 검색조건 Input Box + Cbo + Date 있을 때 사용
 */
const useSearchOnlyCboDate = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  setGridData,
  comboValue,
  dateText,
  uri
) => {
  const actSearchOnlyCboDate = async (startDateNm, endDateNm) => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const cboParams = GetCboSearchParams(inputParams, comboValue);
        const dateParams = GetDateParams(
          cboParams,
          dateText,
          startDateNm,
          endDateNm
        );
        const readURI = uri + dateParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchOnlyCboDate];
};
/**
 * 🔸Edit 사용 안 하는 화면에서 검색조건 Date 있을 때 사용
 */
const useSearchOnlyDate = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  setGridData,
  dateText,
  uri
) => {
  const actSearchOnlyDate = async (startDateNm, endDateNm) => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const dateParams = GetDateParams("", dateText, startDateNm, endDateNm);
        const readURI = uri + dateParams;
        console.log(readURI);
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchOnlyDate];
};
/**
 * 🔸Select Modal에서 데이터 조회
 */
const useSearchSelect = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  setGridModalSelectData,
  uri
) => {
  const actSearchSelect = async () => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const gridData = await restAPI.get(uri);
        await setGridModalSelectData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchSelect];
};
/**
 * 🔸 Select 창에서 Data 조회 (Header + Detail)
 * 하나의 헤더(A)에 여러개의 디테일(01~03)이 있을 때
 * A - 01 / A - 02 / A - 03 이렇게 조회하기 위함.
 */
const useSearchSelectIncludeHeader = (
  refGrid,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  setGridModalSelectData,
  componentName,
  uri
) => {
  const actSearchSelect = async () => {
    refGrid?.current?.gridInst?.finishEditing();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const gridData = await restAPI.get(uri);
        const data = gridData?.data?.data?.rows.map((raw) =>
          GetIncludeHeader(componentName, raw)
        );
        await setGridModalSelectData(data);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchSelect];
};
/**
 * 🔸 메인화면에서 Header 조회 + I(Input) + C(Cbo)
 */
const useSearchHeaderIC = (
  refGrid01,
  refGrid02,
  setInputInfoValue,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputSearchValue,
  comboValue,
  setGridData,
  disRowHeader,
  setDisRowHeader,
  uri
) => {
  const actSearchHeaderIC = async (inputReset = true) => {
    inputReset && setInputInfoValue([]); //🔸Header 조회 시 InputBox 초기화
    refGrid02?.current?.gridInst.clear();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchReadOnly(
          inputBoxID,
          inputSearchValue
        );
        const cboParams = GetCboSearchParams(inputParams, comboValue);
        const readURI = uri + cboParams;
        const gridData = await restAPI.get(readURI);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
        setDisRowHeader(!disRowHeader);
      }
    }
  };
  return [actSearchHeaderIC];
};
/**
 * 🔸 메인화면에서 Header 조회 + D(Date) + I(Input)
 */
const useSearchHeaderDI = (
  refGrid01,
  refGrid02,
  setInputInfoValue,
  isBackDrop,
  setIsBackDrop,
  isSnackOpen,
  setIsSnackOpen,
  inputBoxID,
  inputTextChange,
  dateText,
  setGridData,
  disRowHeader,
  setDisRowHeader,
  uri
) => {
  const actSearchHeaderDI = async (
    inputReset = true,
    startDateNm,
    endDateNm
  ) => {
    inputReset && setInputInfoValue([]); //🔸Header 조회 시 InputBox 초기화
    refGrid02?.current?.gridInst.clear();
    if (isBackDrop === false) {
      try {
        setIsBackDrop(true);
        const inputParams = GetInputSearchParams(inputBoxID, inputTextChange);
        const dateParams = GetDateParams(
          inputParams,
          dateText,
          startDateNm,
          endDateNm
        );
        const readURI = uri + dateParams;
        const gridData = await restAPI.get(readURI);
        console.log(gridData?.data?.data?.rows);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
        setIsSnackOpen({
          ...isSnackOpen,
          open: true,
          message: "조회 실패",
          severity: "error",
        });
      } finally {
        setIsBackDrop(false);
        setDisRowHeader(!disRowHeader);
      }
    }
  };
  return [actSearchHeaderDI];
};
/**
 * 🔸 메인화면에서 Header 클릭 시 RowKey로 Detail 조회
 */
const useSearchDetail = (setGridData, uri, disRowDetail, setDisRowDetail) => {
  const actSearchDetail = async (headerClickRowID) => {
    if (headerClickRowID !== undefined) {
      try {
        const gridData = await restAPI.get(`${uri}/${headerClickRowID}`);
        await setGridData(gridData?.data?.data?.rows);
      } catch {
      } finally {
        setDisRowDetail(!disRowDetail);
      }
    }
  };
  return [actSearchDetail];
};
/**
 * 🔸 Detail 추가 위해 수정화면 진입 시 메인화면에서 선택했던 Header의 정보출력
 */
const useSearchEditHeader = (
  isBackDrop,
  setIsBackDrop,
  setGridDataHeaderRowID,
  uri
) => {
  const actSearchEditHeader = async (headerClickRowID) => {
    if (isBackDrop === false && headerClickRowID !== null) {
      try {
        setIsBackDrop(true);
        const gridDataMain = await restAPI.get(`${uri}/${headerClickRowID}`);
        await setGridDataHeaderRowID(gridDataMain?.data?.data?.rows);
      } catch {
      } finally {
        setIsBackDrop(false);
      }
    }
  };
  return [actSearchEditHeader];
};

export {
  useSearch,
  useSearchCbo,
  useSearchCboDate,
  useSearchOnlyCbo,
  useSearchOnlyCboDate,
  useSearchOnlyDate,
  useSearchSelect,
  useSearchSelectIncludeHeader,
  useSearchHeaderIC,
  useSearchHeaderDI,
  useSearchDetail,
  useSearchEditHeader,
};
