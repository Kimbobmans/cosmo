import restURI from "json/restURI.json";
import * as CustomGrid from "components/grid/setting/CustomGrid";
import CN from "json/ColumnName.json";
import {
  WIDTH_SUPER_SHORT,
  WIDTH_SHORT,
  WIDTH_MIDDLE,
  WIDTH_LONG,
  WIDTH_SUPER_LONG,
  MODAL_BACK_COLOR,
  NORMAL_BACK_COLOR,
} from "constant/Grid.js";

function DocumentSet(isEditMode, lineList) {
  const data = [];
  /** 🔸columns ❗
   * editor: false||"text"
   * whiteSpace: "nowrap"||"normal"||"pre"||"pre-wrap"||"pre-line"
   * sortable: true||false
   * require: true||false
   * rowSpan: true||false
   * hidden: true||false
   * align: "left"||"center"||"right"
   * filter: false||"select"||{type:"text",operator:"OR"}
   */
  const columnsTop = [
    {
      name: "factory_id",
      header: CN.factory_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
      backgroundColor: "green",
    },
    {
      name: "insp_document_id",
      header: CN.insp_document_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_document_no",
      header: CN.insp_document_no,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    isEditMode
      ? {
          name: "line_id",
          header: CN.line_nm,
          minWidth: WIDTH_MIDDLE,
          align: "left",
          formatter: "listItemText",
          editor: {
            type: "select",
            options: {
              listItems: lineList,
            },
          },
          hidden: false,
          sortable: false,
          filter: false,
          whiteSpace: false,
          rowSpan: false,
        }
      : {
          name: "line_nm",
          header: CN.line_nm,
          minWidth: WIDTH_MIDDLE,
          align: "left",
          editor: false,
          hidden: false,
          sortable: false,
          filter: false,
          whiteSpace: false,
          rowSpan: false,
        },
    {
      name: "prod_id",
      header: CN.prod_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "prod_no",
      header: CN.prod_no,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode ? "text" : false,
      renderer: {
        styles: {
          backgroundColor: isEditMode ? MODAL_BACK_COLOR : NORMAL_BACK_COLOR,
          padding: "12px",
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "prod_nm",
      header: CN.prod_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode ? "text" : false,
      renderer: {
        styles: {
          backgroundColor: isEditMode ? MODAL_BACK_COLOR : NORMAL_BACK_COLOR,
          padding: "12px",
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "reg_date",
      header: CN.reg_date,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode
        ? {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          }
        : false,
      formatter: function (value) {
        return CustomGrid.DateFormat(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "apply_date",
      header: CN.apply_date,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode
        ? {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          }
        : false,
      formatter: function (value) {
        return CustomGrid.DateFormat(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "apply_fg",
      header: CN.apply_fg,
      renderer: {
        type: CustomGrid.CheckBox,
        options: {
          name: "apply_fg",
          disabled: isEditMode ? false : true,
        },
      },
      minWidth: WIDTH_SHORT,
      width: WIDTH_SHORT,
      align: "center",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "contents",
      header: CN.contents,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "remark",
      header: CN.remark,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditMode ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "create_at",
      header: CN.create_at,
      minWidth: WIDTH_LONG,
      align: "center",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "create_uid",
      header: CN.create_uid,
      minWidth: WIDTH_SHORT,
      align: "center",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "update_at",
      header: CN.update_at,
      minWidth: WIDTH_LONG,
      align: "center",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "update_uid",
      header: CN.update_uid,
      minWidth: WIDTH_SHORT,
      align: "center",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "delete_at",
      header: CN.delete_at,
      minWidth: WIDTH_LONG,
      align: "center",
      editor: false,
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "delete_uid",
      header: CN.delete_uid,
      minWidth: WIDTH_SHORT,
      align: "center",
      editor: false,
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
  ];
  const columnsModal = [
    {
      name: "factory_id",
      header: CN.factory_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "line_id",
      header: CN.line_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "line_cd",
      header: CN.line_cd,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "line_nm",
      header: CN.line_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
  ];

  const columnOptions = {
    resizable: true,
    frozenBorderWidth: 3,
    frozenCount: 0, // 🔸frozenColumn은 여기 값만 수정
  };
  const rowHeadersTop = ["checkbox", "rowNum"];
  const header = {};
  // const header = {
  //   height: "60",
  //   complexColumns: [
  //     {
  //       header: "ID + Name",
  //       name: "parent1",
  //       childNames: ["id", "name"],
  //     },
  //   ],
  // };

  /**
   * 🔸날짜단일조회 - "single"
   * 🔸날짜기간조회 - "range"
   * 🔸날짜안씀 - null
   */
  const datePickerSet = null;

  /**
   * 🔸inputSet id 값이 ⭐ BE : query params
   */
  const inputSet = [
    {
      id: "line_cd",
      name: CN.line_cd,
    },
    {
      id: "line_nm",
      name: CN.line_nm,
    },
  ];

  const uri = restURI.lines;

  return {
    data,
    columnsTop,
    columnsModal,
    columnOptions,
    rowHeadersTop,
    header,
    datePickerSet,
    inputSet,
    uri,
  };
}

export default DocumentSet;
