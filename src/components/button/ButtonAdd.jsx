import React from "react";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import * as S from "./Button.styled";

function ButtonAdd(props) {
  const { onClickAddRow, onClickRemoveRow, onClickSave } = props;
  return (
    <>
      <S.ButtonSet
        startIcon={<AddIcon />}
        variant="text"
        size="small"
        color="success"
        onClick={onClickAddRow}
      >
        ADD ROW
      </S.ButtonSet>
      <S.ButtonSet
        startIcon={<UTurnLeftIcon />}
        variant="text"
        size="small"
        color="error"
        onClick={onClickRemoveRow}
      >
        CANCEL ROW
      </S.ButtonSet>
      <S.ButtonSet
        startIcon={<SaveIcon />}
        variant="text"
        size="small"
        color="secondary"
        onClick={onClickSave}
      >
        SAVE
      </S.ButtonSet>
    </>
  );
}

export default ButtonAdd;
