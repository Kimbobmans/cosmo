import { useContext, useState, useEffect, useRef } from "react";
import LoginStateChk from "custom/LoginStateChk";
import { LayoutContext } from "components/layout/common/Layout";
import DateTime from "components/datetime/DateTime";
import DayreportSubdivisionSet from "./DayreportSubdivisionSet";
import useInputSet from "custom/useInputSet";
import ButtonNES from "components/button/ButtonNES";
import ButtonNED from "components/button/ButtonNED";
import GridSingle from "components/grid/GridSingle";
import ModalNewDetail from "components/modal/ModalNewDetail";
import ModalSelect from "components/modal/ModalSelect";
import NoticeSnack from "components/alert/NoticeSnack";
import AlertDeleteDetail from "components/onlySearchSingleGrid/modal/AlertDeleteDetail";
import BackDrop from "components/backdrop/BackDrop";
import Condition from "custom/Condition";
import restURI from "json/restURI.json";
import * as uSearch from "custom/useSearch";
import * as uSave from "custom/useSave";
import * as disRow from "custom/useDisableRowCheck";
import * as RE from "custom/RegularExpression";
import * as S from "./DayreportSubdivision.styled";

function DayreportSubdivision() {
  LoginStateChk();
  const { currentMenuName, isAllScreen, isMenuSlide } =
    useContext(LayoutContext);

  const [isEditModeHeader, setIsEditModeHeader] = useState(false);
  const [isEditModeDetail, setIsEditModeDetail] = useState(false);
  const [isNewDetail, setIsNewDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSelectOpen, setIsModalSelectOpen] = useState(false);
  const [isBackDrop, setIsBackDrop] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState({
    open: false,
  });

  const [inputInfoValue, setInputInfoValue] = useState([]);
  const [headerClickRowID, setHeaderClickRowID] = useState(null);

  const {
    columnOptions,
    rowHeadersNumCheck,
    rowHeadersNum,
    header,
    columnsHeader,
    columnsDetail,
    columnsModalHeader,
    columnsModalDetail,
    columnsSelectProd,
    inputSet,
    inputInfo,
  } = DayreportSubdivisionSet(isEditModeHeader, isEditModeDetail, isNewDetail);

  const SWITCH_NAME_01 = "dayreportSubdivision";
  const SWITCH_NAME_02 = "dayreportSubdivisionDetail";
  let modalDetailClickRowKey = null;

  const refGridHeader = useRef(null);
  const refGridDetail = useRef(null);
  const refGridModalHeader = useRef(null);
  const refGridModalDetail = useRef(null);
  const refGridSelect = useRef(null);

  const [gridDataHeader, setGridDataHeader] = useState(null);
  const [gridDataDetail, setGridDataDetail] = useState(null);
  const [gridDataSelect, setGridDataSelect] = useState(null);

  const [dateText, setDateText] = useState({
    startDate: DateTime().dateFull,
    endDate: DateTime(7).dateFull,
  });
  const [dblClickRowKey, setDblClickRowKey] = useState(); //🔸DblClick 했을 때의 rowKey 값
  const [dblClickGrid, setDblClickGrid] = useState(""); //🔸DblClick을 호출한 Grid가 어떤것인지? : "Header" or "Detail"
  const [columnsSelect, setColumnsSelect] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState([]);
  const [inputBoxID, inputTextChange, setInputTextChange] = useInputSet(
    currentMenuName,
    inputSet
  );
  const [comboValue, setComboValue] = useState({});

  const [disRowHeader, setDisRowHeader] = disRow.useDisableRowCheck(
    isEditModeHeader,
    refGridHeader
  );
  const [disRowDetail, setDisRowDetail] = disRow.useDisableRowCheck(
    isEditModeDetail,
    refGridDetail
  );

  const [actSelectProd] = uSearch.useSearchSelect(
    refGridSelect,
    isBackDrop,
    setIsBackDrop,
    isSnackOpen,
    setIsSnackOpen,
    setGridDataSelect,
    restURI.product
  ); //➡️ Modal Select Search Prod

  const [actSave] = uSave.useSaveMulti(
    refGridModalHeader,
    refGridModalDetail,
    isEditModeHeader,
    isBackDrop,
    setIsBackDrop,
    isSnackOpen,
    setIsSnackOpen,
    SWITCH_NAME_01,
    SWITCH_NAME_02,
    restURI.dayreportSubdivision
  );
  const [actSearchHeaderDI] = uSearch.useSearchHeaderDI(
    refGridHeader,
    refGridDetail,
    setInputInfoValue,
    isBackDrop,
    setIsBackDrop,
    isSnackOpen,
    setIsSnackOpen,
    inputBoxID,
    inputTextChange,
    dateText,
    setGridDataHeader,
    disRowHeader,
    setDisRowHeader,
    restURI.dayreportSubdivision
  );

  const [actSearchDetail] = uSearch.useSearchDetail(
    setGridDataDetail,
    restURI.dayreportSubdivisionDetailID,
    disRowDetail,
    setDisRowDetail
  );

  useEffect(() => {
    //🔸좌측 메뉴 접고, 펴기, 팝업 오픈 ➡️ 그리드 사이즈 리셋
    refGridHeader?.current?.gridInst?.refreshLayout();
  }, [isMenuSlide, refGridHeader.current]);
  useEffect(() => {
    //🔸좌측 메뉴 접고, 펴기, 팝업 오픈 ➡️ 그리드 사이즈 리셋
    refGridDetail?.current?.gridInst?.refreshLayout();
  }, [isMenuSlide, refGridDetail.current]);

  const handleInputTextChange = (e) => {
    setInputTextChange({ ...inputTextChange, [e.target.id]: e.target.value });
  };
  const onClickNew = () => {
    setIsModalOpen(true);
  };
  const onClickSearch = () => {
    actSearchHeaderDI(true, "start_date", "end_date");
  };
  const onClickModalAddRow = () => {
    const Header = refGridModalHeader?.current?.gridInst;
    const Detail = refGridModalDetail?.current?.gridInst;
    Header?.finishEditing();
    Detail?.finishEditing();
    Detail?.appendRow();
    if (isNewDetail === true) {
      for (let i = 0; i < Detail.store.viewport.rows.length; i++) {
        Detail?.setValue(
          Detail.store.viewport.rows[i].rowKey,
          "insp_document_id",
          Header.getValue(0, "insp_document_id")
        );
      }
    }
  };
  const onClickGridModalDetail = (e) => {
    modalDetailClickRowKey = e.rowKey;
  };
  const onClickModalCancelRow = () => {
    const gridEvent = refGridModalDetail?.current?.gridInst;
    gridEvent?.removeRow(modalDetailClickRowKey);
    modalDetailClickRowKey = null;
  };
  const onClickModalSave = () => {
    console.log(refGridModalDetail?.current?.gridInst.getModifiedRows());
    actSave();
  };
  const onClickModalClose = () => {
    setIsModalOpen(false);
    setIsNewDetail(false);
    setIsEditModeHeader(false);
    // actSearchHeader(true);
  };
  const onDblClickGridModalDetail = (e) => {
    if (Condition(e, ["prod_no", "prod_nm"])) {
      setDblClickRowKey(e?.rowKey);
      setDblClickGrid("ModalDetail");
      setColumnsSelect(columnsSelectProd);
      setIsModalSelectOpen(true);
      actSelectProd();
    }
  };
  const onEditingFinishGridModalDetail = (e) => {
    const Header = refGridModalHeader?.current?.gridInst;
    const Detail = refGridModalDetail?.current?.gridInst;
    if (Condition(e, ["subdivision_time"])) {
      //🔸시간 정규표현식 적용
      RE.Time(e, refGridModalDetail, "subdivision_time");
    }
    if (Condition(e, ["before_qty"])) {
      const beforeQty = e?.value;
      const afterQty = Detail.getValue(e?.rowKey, "after_qty");
      if (afterQty) {
        Detail?.setValue(e?.rowKey, "qty", beforeQty - afterQty);
      } else {
        Detail?.setValue(e?.rowKey, "qty", beforeQty);
      }
      let totalQty = 0;
      for (
        let i = 0;
        i < refGridModalDetail?.current?.gridInst?.getRowCount();
        i++
      ) {
        totalQty = Number(totalQty) + Number(Detail.getValue(i, "qty"));
      }
      Header?.setValue(0, "total_qty", totalQty);
    }
    if (Condition(e, ["after_qty"])) {
      const beforeQty = Detail.getValue(e?.rowKey, "before_qty");
      const afterQty = e?.value;
      if (beforeQty) {
        Detail?.setValue(e?.rowKey, "qty", beforeQty - afterQty);
      } else {
        Detail?.setValue(e?.rowKey, "qty", -e?.value);
      }
      let totalQty = 0;
      for (
        let i = 0;
        i < refGridModalDetail?.current?.gridInst?.getRowCount();
        i++
      ) {
        totalQty = Number(totalQty) + Number(Detail.getValue(i, "qty"));
      }
      Header?.setValue(0, "total_qty", totalQty);
    }
  };
  const onClickModalSelectClose = () => {
    setIsModalSelectOpen(false);
  };
  const onDblClickGridSelect = (e) => {
    //🔸Select Grid에서 DblClick
    let refGrid;
    let columnName;
    const columnNameProd = ["prod_id", "prod_no", "prod_nm"];
    const columnNameInspItem = [
      "insp_item_type_id",
      "insp_item_type_nm",
      "insp_item_id",
      "insp_item_nm",
    ];

    if (dblClickGrid === "Search") {
      setInputSearchValue([]);
      columnName = ["prod_no", "prod_nm"];
      for (let i = 0; i < columnName.length; i++) {
        setInputSearchValue((prevList) => {
          return [
            ...prevList,
            e?.instance?.store?.data?.rawData[e?.rowKey][columnName[i]],
          ];
        });
      }
    } else {
      if (dblClickGrid === "Header") {
        refGrid = refGridHeader;
        columnName = columnNameProd;
      } else if (dblClickGrid === "ModalHeader") {
        refGrid = refGridModalHeader;
        columnName = columnNameProd;
      } else if (dblClickGrid === "Detail") {
        refGrid = refGridDetail;
        columnName = columnNameInspItem;
      } else if (dblClickGrid === "ModalDetail") {
        refGrid = refGridModalDetail;
        columnName = columnNameProd;
      }
      for (let i = 0; i < columnName.length; i++) {
        refGrid?.current?.gridInst?.setValue(
          dblClickRowKey,
          columnName[i],
          e?.instance?.store?.data?.rawData[e?.rowKey][columnName[i]]
        );
      }
      disRow.handleGridSelectCheck(refGrid, dblClickRowKey);
    }
    setIsModalSelectOpen(false);
  };
  const onClickGridHeader = (e) => {
    const inputInfoValueList = [
      "reg_date",
      "prod_no",
      "prod_nm",
      "total_qty",
      "remark",
    ];
    const rowID = e?.instance.getValue(e?.rowKey, "work_subdivision_id");
    if (rowID !== null) {
      setInputInfoValue([]);
      setHeaderClickRowID(rowID);
      actSearchDetail(rowID);
      for (let i = 0; i < inputInfoValueList.length; i++) {
        let data = e?.instance.getValue(e?.rowKey, inputInfoValueList[i]);
        if (data === false) {
          //🔸false 인 경우 데이터 안찍혀서 강제로 찍음
          data = "false";
        }
        setInputInfoValue((prevList) => {
          return [...prevList, data];
        });
      }
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      // setSearchToggle(!searchToggle);
    }
  };

  return (
    <S.ContentsArea isAllScreen={isAllScreen}>
      <S.ContentsLeft>
        <S.SearchLeftWrap>
          <S.SearchLeftTopWrap>
            <S.Date
              datePickerSet={"range"}
              dateText={dateText}
              setDateText={setDateText}
            />
            {inputSet.map((v) => (
              <S.InputS
                key={v.id}
                id={v.id}
                name={v.name}
                handleInputTextChange={handleInputTextChange}
                onClickSearch={onClickSearch}
                onKeyDown={onKeyDown}
              />
            ))}
          </S.SearchLeftTopWrap>
          <S.SearchLeftBottomWrap>
            <ButtonNES onClickNew={onClickNew} onClickSearch={onClickSearch} />
          </S.SearchLeftBottomWrap>
        </S.SearchLeftWrap>
        <S.GridHeaderWrap>
          <GridSingle
            columnOptions={columnOptions}
            columns={columnsHeader}
            rowHeaders={rowHeadersNumCheck}
            header={header}
            data={gridDataHeader}
            draggable={false}
            refGrid={refGridHeader}
            onClickGrid={onClickGridHeader}
            // onDblClickGrid={onDblClickGrid}
            // onEditingFinish={onEditingFinishGrid}
          />
        </S.GridHeaderWrap>
      </S.ContentsLeft>
      <S.ContentsRight>
        <S.SearchRightWrap>
          <S.SearchRightTopWrap>
            {inputInfo.map((v, idx) => {
              return (
                <S.InputBox key={v.id}>
                  <S.Title variant="overline">{v.name}</S.Title>
                  <S.Input
                    // disabled
                    value={inputInfoValue[idx] || ""}
                    // contentEditable={false}
                    variant="outlined"
                    autoComplete="off"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </S.InputBox>
              );
            })}
          </S.SearchRightTopWrap>
          <S.SearchRightBottomWrap>
            <ButtonNED />
          </S.SearchRightBottomWrap>
        </S.SearchRightWrap>
        <S.GridDetailWrap>
          <GridSingle
            columnOptions={columnOptions}
            columns={columnsDetail}
            rowHeaders={rowHeadersNumCheck}
            header={header}
            data={gridDataDetail}
            draggable={false}
            refGrid={refGridHeader}
            // onClickGrid={onClickGrid}
            // onDblClickGrid={onDblClickGrid}
            // onEditingFinish={onEditingFinishGrid}
          />
        </S.GridDetailWrap>
      </S.ContentsRight>
      {isModalOpen ? (
        <ModalNewDetail
          isNewDetail={isNewDetail}
          // gridDataHeaderRowID={gridDataHeaderRowID}
          onClickModalAddRow={onClickModalAddRow}
          onClickModalCancelRow={onClickModalCancelRow}
          onClickModalSave={onClickModalSave}
          onClickModalClose={onClickModalClose}
          // onClickEditModalSave={onClickEditModalSave}
          columnsModalHeader={columnsModalHeader}
          columnsModalDetail={columnsModalDetail}
          columnOptions={columnOptions}
          header={header}
          rowHeadersHeader={rowHeadersNum}
          rowHeadersDetail={rowHeadersNum}
          refGridModalHeader={refGridModalHeader}
          refGridModalDetail={refGridModalDetail}
          onClickGridModalDetail={onClickGridModalDetail}
          // onDblClickGridModalHeader={onDblClickGridModalHeader}
          onDblClickGridModalDetail={onDblClickGridModalDetail}
          onEditingFinishGridModalDetail={onEditingFinishGridModalDetail}
        />
      ) : null}
      {isModalSelectOpen ? (
        <ModalSelect
          width={"40%"}
          height={"90%"}
          onClickModalSelectClose={onClickModalSelectClose}
          columns={columnsSelect}
          columnOptions={columnOptions}
          header={header}
          gridDataSelect={gridDataSelect}
          rowHeaders={rowHeadersNum}
          refGridSelect={refGridSelect}
          onDblClickGridSelect={onDblClickGridSelect}
        />
      ) : null}
      <NoticeSnack state={isSnackOpen} setState={setIsSnackOpen} />
      <BackDrop isBackDrop={isBackDrop} />
    </S.ContentsArea>
  );
}

export default DayreportSubdivision;
