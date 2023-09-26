import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setDeleteOptions: Dispatch<SetStateAction<any>>;
  onConfirm?: any;
  onCancle?: any;
}

const DeleteModal = ({
  isOpen,
  onCancle,
  onConfirm,
  setDeleteOptions,
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setDeleteOptions({
          showConfirmDelete: false,
        });
      }}
    >
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>Are you sure to delete ?</DialogContent>
      <DialogContent>
        <Button
          onClick={() => {
            setDeleteOptions({
              showConfirmDelete: false,
            });
            if (onConfirm) {
              onConfirm();
            }
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            setDeleteOptions({
              showConfirmDelete: false,
            });
            if (onCancle) {
              onCancle();
            }
          }}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
