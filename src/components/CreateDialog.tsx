import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

function CreateDialog({
  createDialog,
  openCreateDialog,
  closeCreateDialog,
  handleCreate,
  handleCancel,
  formData,
  handleFormChange,
  formErrors,
  handleFormSubmit
}) {


  const footer = (
    <div className="p-d-flex p-jc-between">
      <Button
        label="Cancel"
        style={{ color: "Black" }}
        onClick={closeCreateDialog}
        className="p-button-text"
      />
      <Button  style={{ color: "Black" }} label="Submit" onClick={handleFormSubmit} className="p-button-success" />
    </div>
  );

  return (
    <Dialog
      header="Create Record"
      visible={createDialog}
      style={{ width: "60vw", maxWidth: "500px" }}
      onHide={closeCreateDialog}
      footer={footer}
    >
      <div className="p-grid p-dir-col p-fluid">
        <div className="p-field p-col">
          <label
            htmlFor="Asset"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Asset *
          </label>
          <InputText
            id="Asset"
            name="Asset"
            value={formData.Asset || ''   }
            onChange={handleFormChange}
            required
            className={formErrors?.Asset ? "p-invalid" : ""}
          />
          {formErrors?.Asset && (
            <small className="p-error">Asset is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="Organization"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Organization *
          </label>
          <InputText
            id="Organization"
            name="Organization"
            value={formData.Organization || ''  }
            onChange={handleFormChange}
            required
            className={formErrors?.Organization ? "p-invalid" : ""}
          />
          {formErrors?.Organization && (
            <small className="p-error">Organization is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="Tank"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Tank *
          </label>
          <InputText
            id="Tank"
            name="Tank"
            value={formData.Tank || '' }
            onChange={handleFormChange}
            required
            className={formErrors?.Tank ? "p-invalid" : ""}
          />
          {formErrors?.Tank && (
            <small className="p-error">Tank is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="TankShape"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Tank Shape *
          </label>
          <InputText
            id="TankShape"
            name="TankShape"
            value={formData.TankShape || ''  }
            onChange={handleFormChange}
            required
            className={formErrors?.Tank ? "p-invalid" : ""}
          />
          {formErrors?.TankShape && (
            <small className="p-error">Tank Shape is required.</small>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default CreateDialog;
