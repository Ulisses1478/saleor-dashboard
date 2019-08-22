import DialogContentText from "@material-ui/core/DialogContentText";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import ActionDialog from "@saleor/components/ActionDialog";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";

export interface AttributeBulkDeleteDialogProps {
  confirmButtonState: ConfirmButtonTransitionState;
  quantity: number;
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const AttributeBulkDeleteDialog: React.StatelessComponent<
  AttributeBulkDeleteDialogProps
> = ({ confirmButtonState, quantity, onClose, onConfirm, open }) => {
  const intl = useIntl();

  return (
    <ActionDialog
      open={open}
      confirmButtonState={confirmButtonState}
      onClose={onClose}
      onConfirm={onConfirm}
      title={intl.formatMessage({defaultMessage: "Delete attributes",
        description: "dialog title",
        })}
      variant="delete"
    >
      <DialogContentText>
        <FormattedMessage
          defaultMessage="Are you sure you want to delete {counter, plural,
            one {this attribute}
            other {{displayQuantity} attributes}
          }?"
          description="dialog content"
          values={{
            counter: quantity,
            displayQuantity: <strong>{quantity}</strong>
          }}
        />
      </DialogContentText>
    </ActionDialog>
  );
};
AttributeBulkDeleteDialog.displayName = "AttributeBulkDeleteDialog";
export default AttributeBulkDeleteDialog;
