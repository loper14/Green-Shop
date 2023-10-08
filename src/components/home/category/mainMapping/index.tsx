import { Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useAxios } from "../../../../hooks/useAxios";
import useQueryHandler from "../../../../hooks/useQuery";
import { useMutation, useQueryClient } from "react-query";
import { useReduxSelector } from "../../../../hooks/useRedux";
import Header from "./header";
import Mapping from "./mapping";

const MainMapping = () => {
  return (
    <div>
      <Header />
      <Mapping />
    </div>
  );
};

export default MainMapping;
