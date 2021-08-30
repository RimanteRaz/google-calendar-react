import { Close } from "@material-ui/icons";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { Button } from "../button";
import styles from "./ModalContainer.module.scss";

export const ModalContainer: React.FC<ModalContainerProps> = ({ closeModal, children }) => {
  const dispatch = useDispatch();

  const modal = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modal.current && !modal.current.contains(event.target as Node)) {
      dispatch(closeModal());
    }
  };

  return (
    <div
      className={styles.container}
      onClick={event => {
        handleClickOutside(event);
      }}
    >
      <div className={styles.modal} ref={modal}>
        <div className={styles.header}>
          <Button onClick={() => dispatch(closeModal())} styleName={"round"}>
            <Close />
          </Button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

type ModalContainerProps = {
  closeModal: () => Action;
};
