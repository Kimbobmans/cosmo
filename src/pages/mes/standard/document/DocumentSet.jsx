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

function DocumentSet(
  isEditModeHeader,
  isEditModeDetail,
  isNewDetail,
  lineList,
  processList,
  equipmentList,
  inspectMethodList,
  inspectToolList,
  inspectFilingList
) {
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
  const columnsHeader = [
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
    {
      name: isEditModeHeader ? "line_id" : "line_nm",
      header: CN.line_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeHeader ? "listItemText" : null,
      editor: isEditModeHeader
        ? {
            type: "select",
            options: {
              listItems: lineList,
            },
          }
        : false,
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
      editor: false,
      validation: isEditModeHeader
        ? {
            required: true,
          }
        : null,
      hidden: true,
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
      editor: false,
      validation: isEditModeHeader
        ? {
            required: true,
          }
        : null,
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
      editor: false,
      validation: isEditModeHeader
        ? {
            required: true,
          }
        : null,
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
      align: "center",
      editor: isEditModeHeader
        ? {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "apply_date",
      header: CN.reg_date,
      minWidth: WIDTH_MIDDLE,
      align: "center",
      editor: isEditModeHeader
        ? {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          }
        : false,
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
          disabled: isEditModeHeader ? false : true,
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
      editor: isEditModeHeader ? "text" : false,
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
      editor: isEditModeHeader ? "text" : false,
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
  const columnsDetail = [
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
      name: "insp_document_detail_id",
      header: CN.insp_document_detail_id,
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
      name: "sortby",
      header: CN.sortby,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorNumber,
          }
        : false,
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isEditModeDetail ? "proc_id" : "proc_nm",
      header: CN.proc_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: processList,
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isEditModeDetail ? "equip_id" : "equip_nm",
      header: CN.equip_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: equipmentList,
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_proc_gbn",
      header: CN.insp_proc_gbn,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: [
                { text: "제품", value: "제품" },
                { text: "공정", value: "공정" },
              ],
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_type_id",
      header: CN.insp_item_type_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: isEditModeDetail ? true : false,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_type_nm",
      header: CN.insp_item_type_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: isEditModeDetail ? true : false,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_id",
      header: CN.insp_item_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: isEditModeDetail ? true : false,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_nm",
      header: CN.insp_item_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: isEditModeDetail ? true : false,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_desc",
      header: CN.insp_item_desc,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_std",
      header: CN.spec_std,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_min",
      header: CN.spec_min,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorFloat2,
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_max",
      header: CN.spec_max,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorFloat2,
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_lcl",
      header: CN.spec_lcl,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorFloat2,
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_ucl",
      header: CN.spec_ucl,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorFloat2,
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isEditModeDetail ? "insp_method_id" : "insp_method_nm",
      header: CN.insp_method_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: inspectMethodList,
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isEditModeDetail ? "insp_tool_id" : "insp_tool_nm",
      header: CN.insp_tool_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: inspectToolList,
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isEditModeDetail ? "insp_filing_id" : "insp_filing_nm",
      header: CN.insp_filing_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: isEditModeDetail ? "listItemText" : null,
      editor: isEditModeDetail
        ? {
            type: "select",
            options: {
              listItems: inspectFilingList,
            },
          }
        : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "special_property",
      header: CN.special_property,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "worker_sample_cnt",
      header: CN.worker_sample_cnt,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorNumber,
          }
        : false,
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "worker_insp_cycle",
      header: CN.worker_insp_cycle,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "inspector_sample_cnt",
      header: CN.inspector_sample_cnt,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail
        ? {
            type: CustomGrid.EditorNumber,
          }
        : false,
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "inspector_insp_cycle",
      header: CN.inspector_insp_cycle,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "infc_memory_id",
      header: CN.infc_memory_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: isEditModeDetail ? "text" : false,
      hidden: true,
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
      editor: isEditModeDetail ? "text" : false,
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
  const columnsModalHeader = [
    {
      name: "insp_document_id",
      header: CN.insp_document_id,
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
      name: "insp_document_no",
      header: CN.insp_document_no,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: isNewDetail ? false : "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: isNewDetail ? "line_nm" : "line_id",
      header: CN.line_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: isNewDetail ? null : "listItemText",
      editor: isNewDetail
        ? false
        : {
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
    },
    {
      name: "prod_id",
      header: CN.prod_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: isNewDetail ? false : true,
      },
      hidden: true,
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
      editor: false,
      validation: {
        required: isNewDetail ? false : true,
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
      editor: false,
      validation: {
        required: isNewDetail ? false : true,
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
      align: "center",
      editor: isNewDetail
        ? false
        : {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          },
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
      align: "center",
      editor: isNewDetail
        ? false
        : {
            type: "datePicker",
            options: {
              language: "ko",
              format: "yyyy-MM-dd",
            },
          },
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
          disabled: isNewDetail ? true : false,
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
      editor: isNewDetail ? false : "text",
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
      editor: isNewDetail ? false : "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
  ];
  const columnsModalDetail = [
    {
      name: "insp_document_id",
      header: CN.insp_document_id,
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
      name: "sortby",
      header: CN.sortby,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: {
        type: CustomGrid.EditorNumber,
      },
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "proc_id",
      header: CN.proc_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: processList,
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "equip_id",
      header: CN.equip_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: equipmentList,
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_proc_gbn",
      header: CN.insp_proc_gbn,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: [
            { text: "제품", value: "제품" },
            { text: "공정", value: "공정" },
          ],
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_type_id",
      header: CN.insp_item_type_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: true,
      },
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_type_nm",
      header: CN.insp_item_type_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: true,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_id",
      header: CN.insp_item_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: true,
      },
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_nm",
      header: CN.insp_item_nm,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: false,
      validation: {
        required: true,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_desc",
      header: CN.insp_item_desc,
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
      name: "spec_std",
      header: CN.spec_std,
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
      name: "spec_min",
      header: CN.spec_min,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorFloat2,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_max",
      header: CN.spec_max,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorFloat2,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_lcl",
      header: CN.spec_lcl,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorFloat2,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "spec_ucl",
      header: CN.spec_ucl,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorFloat2,
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_method_id",
      header: CN.insp_method_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: inspectMethodList,
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_tool_id",
      header: CN.insp_tool_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: inspectToolList,
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_filing_id",
      header: CN.insp_filing_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: inspectFilingList,
        },
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "special_property",
      header: CN.special_property,
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
      name: "worker_sample_cnt",
      header: CN.worker_sample_cnt,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorNumber,
      },
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "worker_insp_cycle",
      header: CN.worker_insp_cycle,
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
      name: "inspector_sample_cnt",
      header: CN.inspector_sample_cnt,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: {
        type: CustomGrid.EditorNumber,
      },
      formatter: function (value) {
        return CustomGrid.NumComma(value);
      },
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "inspector_insp_cycle",
      header: CN.inspector_insp_cycle,
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
      name: "infc_memory_id",
      header: CN.infc_memory_id,
      minWidth: WIDTH_MIDDLE,
      align: "left",
      editor: "text",
      hidden: true,
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
      editor: "text",
      hidden: false,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
  ];
  const columnsSelectProd = [
    {
      name: "prod_id",
      header: CN.prod_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "prod_no",
      header: CN.prod_no,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: "select",
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "prod_nm",
      header: CN.prod_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: "select",
      whiteSpace: false,
      rowSpan: false,
    },
  ];
  const columnsSelectInsp = [
    {
      name: "insp_item_type_id",
      header: CN.insp_item_type_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_type_nm",
      header: CN.insp_item_type_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: "select",
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_id",
      header: CN.insp_item_id,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: true,
      sortable: false,
      filter: false,
      whiteSpace: false,
      rowSpan: false,
    },
    {
      name: "insp_item_nm",
      header: CN.insp_item_nm,
      minWidth: WIDTH_SHORT,
      align: "left",
      editor: false,
      hidden: false,
      sortable: false,
      filter: "select",
      whiteSpace: false,
      rowSpan: false,
    },
  ];
  const columnOptions = {
    resizable: true,
    frozenBorderWidth: 3,
    frozenCount: 0, // 🔸frozenColumn은 여기 값만 수정
  };
  const rowHeadersNumCheck = ["checkbox", "rowNum"];
  const rowHeadersNum = ["rowNum"];
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
      id: "prod_no",
      name: CN.prod_no,
    },
    {
      id: "prod_nm",
      name: CN.prod_nm,
    },
  ];

  const inputInfo = [
    {
      id: "insp_document_no",
      name: CN.insp_document_no,
    },
    {
      id: "line_nm",
      name: CN.line_nm,
    },
    {
      id: "prod_no",
      name: CN.prod_no,
    },
    {
      id: "prod_nm",
      name: CN.prod_nm,
    },
    {
      id: "reg_date",
      name: CN.reg_date,
    },
    {
      id: "apply_date",
      name: CN.apply_date,
    },
    {
      id: "apply_fg",
      name: CN.apply_fg,
    },
    {
      id: "contents",
      name: CN.contents,
    },
    {
      id: "remark",
      name: CN.remark,
    },
  ];
  return {
    data,
    columnsHeader,
    columnsDetail,
    columnsModalHeader,
    columnsModalDetail,
    columnsSelectProd,
    columnsSelectInsp,
    columnOptions,
    rowHeadersNumCheck,
    rowHeadersNum,
    header,
    datePickerSet,
    inputSet,
    inputInfo,
  };
}

export default DocumentSet;
