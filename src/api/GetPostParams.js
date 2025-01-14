// ✨ INSERT ✨

class factory {
  constructor(raw) {
    this.factory_cd = raw.factory_cd;
    this.factory_nm = raw.factory_nm;
  }
}
class line {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.line_cd = raw.line_cd;
    this.line_nm = raw.line_nm;
  }
}
class user {
  constructor(raw) {
    this.id = raw.id;
    this.group_id = raw.group_id;
    this.user_nm = raw.user_nm;
    this.pwd = raw.pwd;
    this.pwd_dev = raw.pwd_dev;
    this.email = raw.email;
    this.pwd_fg = raw.pwd_fg ? true : false;
    this.admin_fg = raw.admin_fg ? true : false;
    this.super_admin_fg = raw.super_admin_fg ? true : false;
  }
}
class employee {
  constructor(raw) {
    this.emp_cd = raw.emp_cd;
    this.emp_nm = raw.emp_nm;
    this.uid = raw.uid;
    this.dept_id = raw.dept_id;
    this.grade_id = raw.grade_id;
    this.worker_group_id = raw.worker_group_id;
    this.birthday = raw.birthday;
    this.hp = raw.hp;
    this.post = raw.post;
    this.addr = raw.addr;
    this.addr_detail = raw.addr_detail;
    this.enter_date = raw.enter_date;
    this.leave_date = raw.leave_date;
    this.use_fg = raw.use_fg ? true : false;
    this.worker_fg = raw.worker_fg ? true : false;
    this.remark = raw.remark;
  }
}
class equipment {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.proc_id = raw.proc_id;
    this.equip_type_id = raw.equip_type_id;
    this.equip_cd = raw.equip_cd;
    this.equip_nm = raw.equip_nm;
    this.workings_id = raw.workings_id;
    this.manager_emp_id = raw.manager_emp_id;
    this.sub_manager_emp_id = raw.sub_manager_emp_id;
    this.use_fg = raw.use_fg ? true : false;
    this.prd_fg = raw.prd_fg ? true : false;
    this.remark = raw.remark;
  }
}
class product {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.prod_no = raw.prod_no;
    this.prod_nm = raw.prod_nm;
    this.prod_gbn_id = raw.prod_gbn_id;
    this.model_id = raw.model_id;
    this.prod_type_id = raw.prod_type_id;
    this.prod_type_small_id = raw.prod_type_small_id;
    this.unit_id = raw.unit_id;
    this.rev = raw.rev;
    this.prod_std = raw.prod_std;
    this.lot_fg = raw.lot_fg ? true : false;
    this.use_fg = raw.use_fg ? true : false;
    this.active_fg = raw.active_fg ? true : false;
    this.bom_type_id = raw.bom_type_id;
    this.width = String(raw.width) ? Number(raw.width) : null;
    this.length = String(raw.length) ? Number(raw.length) : null;
    this.height = String(raw.height) ? Number(raw.height) : null;
    this.material = raw.material;
    this.color = raw.color;
    this.weight = String(raw.weight) ? Number(raw.weight) : null;
    this.thickness = String(raw.thickness) ? Number(raw.thickness) : null;
    this.is_spareparts = raw.is_spareparts ? true : false;
    this.mat_order_fg = raw.mat_order_fg ? true : false;
    this.mat_unit_id = raw.mat_unit_id;
    this.mat_order_min_qty = String(raw.mat_order_min_qty)
      ? Number(raw.mat_order_min_qty)
      : null;
    this.mat_supply_days = String(raw.mat_supply_days)
      ? Number(raw.mat_supply_days)
      : null;
    this.sal_order_fg = raw.sal_order_fg ? true : false;
    this.inv_use_fg = raw.inv_use_fg ? true : false;
    this.inv_unit_qty = String(raw.inv_unit_qty)
      ? Number(raw.inv_unit_qty)
      : null;
    this.inv_safe_qty = String(raw.inv_safe_qty)
      ? Number(raw.inv_safe_qty)
      : null;
    this.inv_to_store_id = raw.inv_to_store_id;
    this.inv_to_location_id = raw.inv_to_location_id;
    this.qms_receive_insp_fg = raw.qms_receive_insp_fg ? true : false;
    this.qms_proc_insp_fg = raw.qms_proc_insp_fg ? true : false;
    this.qms_final_insp_fg = raw.qms_final_insp_fg ? true : false;
    this.prd_plan_type_id = raw.prd_plan_type_id;
    this.prd_active_fg = raw.prd_active_fg ? true : false;
    this.prd_min = String(raw.prd_min) ? Number(raw.prd_min) : null;
    this.prd_max = String(raw.prd_max) ? Number(raw.prd_max) : null;
  }
}
class productGbn {
  constructor(raw) {
    this.prod_gbn_cd = raw.prod_gbn_cd;
    this.prod_gbn_nm = raw.prod_gbn_nm;
  }
}
class productType {
  constructor(raw) {
    this.prod_type_cd = raw.prod_type_cd;
    this.prod_type_nm = raw.prod_type_nm;
  }
}
class routing {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.line_id = raw.line_id;
    this.proc_id = raw.proc_id;
    this.prod_id = raw.prod_id;
    this.proc_no = raw.proc_no;
    this.auto_work_fg = raw.auto_work_fg ? true : false;
    this.cycle_time = raw.cycle_time;
    this.uph = raw.uph;
  }
}
class store {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.store_cd = raw.store_cd;
    this.store_nm = raw.store_nm;
    this.reject_store_fg = raw.reject_store_fg ? true : false;
    this.return_store_fg = raw.return_store_fg ? true : false;
    this.outgo_store_fg = raw.outgo_store_fg ? true : false;
    this.final_insp_store_fg = raw.final_insp_store_fg ? true : false;
    this.outsourcing_store_fg = raw.outsourcing_store_fg ? true : false;
    this.available_store_fg = raw.available_store_fg ? true : false;
    this.position_type = raw.position_type;
  }
}
class storeLocation {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.store_id = raw.store_id;
    this.location_cd = raw.location_cd;
    this.location_nm = raw.location_nm;
  }
}
class department {
  constructor(raw) {
    this.dept_cd = raw.dept_cd;
    this.dept_nm = raw.dept_nm;
  }
}
class grade {
  constructor(raw) {
    this.grade_cd = raw.grade_cd;
    this.grade_nm = raw.grade_nm;
  }
}
class downtimeType {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.downtime_type_cd = raw.downtime_type_cd;
    this.downtime_type_nm = raw.downtime_type_nm;
  }
}
class downtime {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.downtime_type_id = raw.downtime_type_id;
    this.downtime_cd = raw.downtime_cd;
    this.downtime_nm = raw.downtime_nm;
    this.eqm_failure_fg = raw.eqm_failure_fg ? true : false;
  }
}
class model {
  constructor(raw) {
    this.model_cd = raw.model_cd;
    this.model_nm = raw.model_nm;
  }
}
class unit {
  constructor(raw) {
    this.unit_cd = raw.unit_cd;
    this.unit_nm = raw.unit_nm;
  }
}
class workingGroup {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.worker_group_cd = raw.worker_group_cd;
    this.worker_group_nm = raw.worker_group_nm;
  }
}
class inspectFiling {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_filing_cd = raw.insp_filing_cd;
    this.insp_filing_nm = raw.insp_filing_nm;
  }
}
class inspectMethod {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_method_cd = raw.insp_method_cd;
    this.insp_method_nm = raw.insp_method_nm;
  }
}
class inspectTool {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_tool_cd = raw.insp_tool_cd;
    this.insp_tool_nm = raw.insp_tool_nm;
  }
}
class inspectType {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_item_type_cd = raw.insp_item_type_cd;
    this.insp_item_type_nm = raw.insp_item_type_nm;
  }
}
class inspectItem {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_item_type_id = raw.insp_item_type_id;
    this.insp_item_cd = raw.insp_item_cd;
    this.insp_item_nm = raw.insp_item_nm;
    this.insp_tool_id = raw.insp_tool_id;
    this.insp_method_id = raw.insp_method_id;
    this.unit_id = raw.unit_id;
  }
}
class interfaceItemType {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.infc_item_type_cd = raw.infc_item_type_cd;
    this.infc_item_type_nm = raw.infc_item_type_nm;
  }
}
class interfaceItem {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.infc_item_type_id = raw.infc_item_type_id;
    this.infc_item_cd = raw.infc_item_cd;
    this.infc_item_nm = raw.infc_item_nm;
  }
}
class interfaceMemory {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.infc_item_type_id = raw.infc_item_type_id;
    this.infc_item_id = raw.infc_item_id;
    this.line_id = raw.line_id;
    this.proc_id = raw.proc_id;
    this.equip_id = raw.equip_id;
    this.plc_ip = raw.plc_ip;
    this.plc_port = String(raw.plc_port) ? Number(raw.plc_port) : null;
    this.device_addre = raw.device_addre;
    this.tag_id = raw.tag_id;
    this.infc_memory_nm = raw.infc_memory_nm;
    this.remark = raw.remark;
  }
}
class equipmentLarge {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.classification_cd = raw.classification_cd;
    this.classification_nm = raw.classification_nm;
  }
}
class equipmentMedium {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.group_cd = raw.group_cd;
    this.group_nm = raw.group_nm;
  }
}
class equipmentSmall {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.class_cd = raw.class_cd;
    this.class_nm = raw.class_nm;
  }
}
class equipmentDetail {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.proc_id = raw.proc_id;
    this.equip_id = raw.equip_id;
    this.eqm_detail_cd = raw.eqm_detail_cd;
    this.eqm_detail_nm = raw.eqm_detail_nm;
    this.classification_id = raw.classification_id;
    this.group_id = raw.group_id;
    this.class_id = raw.class_id;
    this.manager_emp_id = raw.manager_emp_id;
    this.sub_manager_emp_id = raw.sub_manager_emp_id;
    this.equip_no = raw.equip_no;
    this.equip_grade = raw.equip_grade;
    this.equip_model = raw.equip_model;
    this.equip_std = raw.equip_std;
    this.equip_spec = raw.equip_spec;
    this.voltage = raw.voltage;
    this.manufacturer = raw.manufacturer;
    this.purchase_partner = raw.purchase_partner;
    this.purchase_date = raw.purchase_date;
    this.purchase_tel = raw.purchase_tel;
    this.purchase_price = String(raw.purchase_price)
      ? Number(raw.purchase_price)
      : null;
    this.use_fg = raw.use_fg ? true : false;
    this.remark = raw.remark;
  }
}
class setup {
  constructor(raw) {
    this.setup_cd = raw.setup_cd;
    this.setup_nm = raw.setup_nm;
    this.auth_read = raw.auth_read ? true : false;
    this.auth_create = raw.auth_create ? true : false;
    this.auth_update = raw.auth_update ? true : false;
    this.auth_delete = raw.auth_delete ? true : false;
  }
}
class document {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_document_no = raw.insp_document_no;
    this.line_id = raw.line_id;
    this.prod_id = raw.prod_id;
    this.reg_date = raw.reg_date;
    this.apply_date = raw.apply_date;
    this.apply_fg = raw.apply_fg ? true : false;
    this.contents = raw.contents;
    this.remark = raw.remark;
  }
}
class documentDetail {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.insp_document_id = raw.insp_document_id;
    this.sortby = String(raw.sortby) ? Number(raw.sortby) : null;
    this.proc_id = raw.proc_id;
    this.equip_id = raw.equip_id;
    this.insp_proc_gbn = raw.insp_proc_gbn;
    this.insp_item_id = raw.insp_item_id;
    this.insp_item_desc = raw.insp_item_desc;
    this.spec_std = raw.spec_std;
    this.spec_min = String(raw.spec_min) ? Number(raw.spec_min) : null;
    this.spec_max = String(raw.spec_max) ? Number(raw.spec_max) : null;
    this.spec_lcl = String(raw.spec_lcl) ? Number(raw.spec_lcl) : null;
    this.spec_ucl = String(raw.spec_ucl) ? Number(raw.spec_ucl) : null;
    this.insp_filing_id = raw.insp_filing_id;
    this.insp_tool_id = raw.insp_tool_id;
    this.insp_method_id = raw.insp_method_id;
    this.special_property = raw.special_property;
    this.worker_sample_cnt = String(raw.worker_sample_cnt)
      ? Number(raw.worker_sample_cnt)
      : null;
    this.worker_insp_cycle = raw.worker_insp_cycle;
    this.inspector_sample_cnt = String(raw.inspector_sample_cnt)
      ? Number(raw.inspector_sample_cnt)
      : null;
    this.inspector_insp_cycle = raw.inspector_insp_cycle;
    this.infc_memory_id = raw.infc_memory_id;
    this.remark = raw.remark;
  }
}

class spareReceive {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.partner_id = raw.partner_id;
    this.supplier_id = raw.supplier_id;
    this.stmt_no = raw.stmt_no;
    this.reg_date = raw.reg_date;
    this.total_price = String(raw.total_price) ? Number(raw.total_price) : null;
    this.total_qty = String(raw.total_qty) ? Number(raw.total_qty) : null;
    this.order_id = raw.order_id;
    this.spare_receive_uid = raw.spare_receive_uid;
    this.emp_nm = raw.emp_nm;
    this.remark = raw.remark;
  }
}
class spareReceiveDetail {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.spare_receive_id = raw.spare_receive_id;
    this.prod_id = raw.prod_id;
    this.unit_id = raw.unit_id;
    this.lot_no = raw.lot_no;
    this.manufactured_lot_no = raw.manufactured_lot_no;
    this.qty = String(raw.qty) ? Number(raw.qty) : null;
    this.price = String(raw.price) ? Number(raw.price) : null;
    this.money_unit_id = raw.money_unit_id;
    this.exchange = String(raw.exchange) ? Number(raw.exchange) : null;
    this.total_price = String(raw.total_price) ? Number(raw.total_price) : null;
    this.unit_qty = String(raw.unit_qty) ? Number(raw.unit_qty) : null;
    this.insp_fg = raw.insp_fg ? true : false;
    this.carry_fg = raw.carry_fg ? true : false;
    this.order_detail_id = raw.order_detail_id;
    this.to_store_id = raw.to_store_id;
    this.to_location_id = raw.to_location_id;
    this.barcode = raw.barcode;
    this.remark = raw.remark;
  }
}
class controlPlan {
  constructor(raw, factory_id) {
    this.factory_id = factory_id;
    this.control_plan_no = raw.control_plan_no;
    this.line_id = raw.line_id;
    this.prod_id = raw.prod_id;
    this.reg_date = raw.reg_date;
    this.apply_date = raw.apply_date;
    this.apply_fg = raw.apply_fg ? true : false;
    this.contents = raw.contents;
    this.remark = raw.remark;
  }
}
class controlPlanDetail {
  constructor(raw, factory_id) {
    this.control_plan_id = raw.control_plan_id;
    this.proc_no = String(raw.proc_no) ? Number(raw.proc_no) : null;
    this.insp_document_detail_id = raw.insp_document_detail_id;
    this.insp_document_id = raw.insp_document_id;
    this.remark = raw.remark;
  }
}
class dayreportSubdivision {
  constructor(raw, factory_id) {
    this.reg_date = raw.reg_date;
    this.lot_no = raw.lot_no;
    this.total_qty = String(raw.total_qty) ? Number(raw.total_qty) : null;
    this.remark = raw.remark;
  }
}
class dayreportSubdivisionDetail {
  constructor(raw, factory_id) {
    this.work_subdivision_id = raw.work_subdivision_id;
    this.prod_id = raw.prod_id;
    this.lot_no = raw.lot_no;
    this.before_qty = String(raw.before_qty) ? Number(raw.before_qty) : null;
    this.after_qty = String(raw.after_qty) ? Number(raw.after_qty) : null;
    this.qty = String(raw.qty) ? Number(raw.qty) : null;
    this.subdivision_uid = raw.subdivision_uid;
    this.inv_to_store_id = raw.inv_to_store_id;
    this.inv_to_location_id = raw.inv_to_location_id;
    this.barcode_no = raw.barcode_no;
    this.remark = raw.remark;
  }
}

/**
 * 🔍 Grid Cell 이 Combo 인 경우
 * this.prod_gbn_id = raw.prod_gbn_nm; ➡️ id = nm 형식으로 작성
 */

/**
 * @param {string} componentName 소문자로 시작
 * @param {any} raw 처리 할 데이터
 * @param {string} factory_id 쿠키에서 현재 로그인 한 사업부 아이디
 * @returns
 */
function GetPostParams(componentName, raw, factory_id) {
  let params = "";
  if (raw !== undefined) {
    switch (componentName) {
      case "factory":
        params = new factory(raw);
        break;
      case "line":
        params = new line(raw, factory_id);
        break;
      case "user":
        params = new user(raw);
        break;
      case "employee":
        params = new employee(raw);
        break;
      case "unit":
        params = new unit(raw);
        break;
      case "equipment":
        params = new equipment(raw, factory_id);
        break;
      case "product":
        params = new product(raw, factory_id);
        break;
      case "productGbn":
        params = new productGbn(raw);
        break;
      case "productType":
        params = new productType(raw);
        break;
      case "routing":
        params = new routing(raw, factory_id);
        break;
      case "store":
        params = new store(raw, factory_id);
        break;
      case "storeLocation":
        params = new storeLocation(raw, factory_id);
        break;
      case "department":
        params = new department(raw);
        break;
      case "grade":
        params = new grade(raw);
        break;
      case "downtimeType":
        params = new downtimeType(raw, factory_id);
        break;
      case "downtime":
        params = new downtime(raw, factory_id);
        break;
      case "model":
        params = new model(raw);
        break;
      case "workingGroup":
        params = new workingGroup(raw, factory_id);
        break;
      case "inspectFiling":
        params = new inspectFiling(raw, factory_id);
        break;
      case "inspectMethod":
        params = new inspectMethod(raw, factory_id);
        break;
      case "inspectTool":
        params = new inspectTool(raw, factory_id);
        break;
      case "inspectType":
        params = new inspectType(raw, factory_id);
        break;
      case "inspectItem":
        params = new inspectItem(raw, factory_id);
        break;
      case "interfaceItemType":
        params = new interfaceItemType(raw, factory_id);
        break;
      case "interfaceItem":
        params = new interfaceItem(raw, factory_id);
        break;
      case "interfaceMemory":
        params = new interfaceMemory(raw, factory_id);
        break;
      case "equipmentLarge":
        params = new equipmentLarge(raw, factory_id);
        break;
      case "equipmentMedium":
        params = new equipmentMedium(raw, factory_id);
        break;
      case "equipmentSmall":
        params = new equipmentSmall(raw, factory_id);
        break;
      case "equipmentDetail":
        params = new equipmentDetail(raw, factory_id);
        break;
      case "setup":
        params = new setup(raw);
        break;
      case "document":
        params = new document(raw, factory_id);
        break;
      case "documentDetail":
        params = new documentDetail(raw, factory_id);
        break;
      case "spareReceive":
        params = new spareReceive(raw, factory_id);
        break;
      case "spareReceiveDetail":
        params = new spareReceiveDetail(raw, factory_id);
        break;
      case "controlPlan":
        params = new controlPlan(raw, factory_id);
        break;
      case "controlPlanDetail":
        params = new controlPlanDetail(raw, factory_id);
        break;
      case "dayreportSubdivision":
        params = new dayreportSubdivision(raw, factory_id);
        break;
      case "dayreportSubdivisionDetail":
        params = new dayreportSubdivisionDetail(raw, factory_id);
        break;
      default:
    }
  }
  return params;
}

export default GetPostParams;
