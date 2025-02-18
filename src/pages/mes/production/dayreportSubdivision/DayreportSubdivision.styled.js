import styled from "styled-components";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "components/datetime/DatePicker";
import InputSearch from "components/input/InputSearch";
import * as C from "constant/Layout";

export const ContentsArea = styled("div")`
  height: ${(props) =>
    props.isAllScreen ? "100vh" : `calc(100vh - ${C.APP_BAR_HEIGHT})`};
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px 5px 10px;
  display: flex;
`;
export const ContentsLeft = styled("div")`
  height: 100%;
  width: 40%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
  margin-right: 2.5px;
  padding: 10px 10px 10px 10px;
`;
export const ContentsRight = styled("div")`
  height: 100%;
  width: 60%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
  margin-left: 2.5px;
  padding: 10px 10px 10px 10px;
`;
export const SearchLeftWrap = styled("div")`
  height: 110px;
  width: 100%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
  padding: 10px 5px 5px 0px;
`;
export const GridHeaderWrap = styled("div")`
  height: ${`calc(100% - 105px)`};
  width: 100%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
  margin-top: 10px;
`;
export const SearchRightWrap = styled("div")`
  height: 20%;
  width: 100%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
`;
export const GridDetailWrap = styled("div")`
  height: 79%;
  width: 100%;
  border-radius: 10px;
  border-color: rgb(200, 200, 200);
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px;
  margin-top: 10px;
`;
export const SearchLeftTopWrap = styled("div")`
  height: 50%;
  display: flex;
  flex-flow: row wrap;
`;
export const SearchLeftBottomWrap = styled("div")`
  height: 50%;
  display: flex;
  justify-content: end;
  align-items: end;
  padding-bottom: 5px;
`;
export const SearchRightTopWrap = styled("div")`
  height: 50%;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 10px 0px 10px;
`;
export const SearchRightBottomWrap = styled("div")`
  height: 50%;
  display: flex;
  justify-content: end;
  align-items: end;
  padding-bottom: 5px;
`;
export const Date = styled(DatePicker)`
  height: 40px;
`;
export const InputS = styled(InputSearch)`
  height: 40px;
`;
export const InputBox = styled("div")`
  width: 250px;
  display: flex;
  margin-right: 5px;
  margin-top: 5px;
`;
export const Title = styled(Typography)`
  width: 50px;
`;

export const Input = styled(TextField)`
  width: 150px;
`;
