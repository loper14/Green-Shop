import type { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./modals/siteMap";
import AuthModal from "./modals/authModal";

const ModalVisibility: FC = () => {
  const { siteMapModalVisibility, authModalVisibility } = useReduxSelector(
    (state) => state.modal,
  );
  return (
    <>
      {siteMapModalVisibility && <SiteMap />}
      {authModalVisibility.open && <AuthModal />}
    </>
  );
};

export default ModalVisibility;
