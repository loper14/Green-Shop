import type { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./modals/siteMap";
import AuthModal from "./modals/authModal";
import InProcessModal from "./modals/inProcess";

const ModalVisibility: FC = () => {
  const {
    siteMapModalVisibility,
    authModalVisibility,
    inProcessModalVisibility,
  } = useReduxSelector((state) => state.modal);
  return (
    <>
      {siteMapModalVisibility && <SiteMap />}
      {authModalVisibility.open && <AuthModal />}
      {inProcessModalVisibility && <InProcessModal />}
    </>
  );
};

export default ModalVisibility;
