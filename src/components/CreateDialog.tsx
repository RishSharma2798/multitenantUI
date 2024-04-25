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
            htmlFor="asset"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Asset *
          </label>
          <InputText
            id="asset"
            name="asset"
            value={formData.asset || ''   }
            onChange={handleFormChange}
            required
            className={formErrors?.asset ? "p-invalid" : ""}
          />
          {formErrors?.asset && (
            <small className="p-error">Asset is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="organization"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Organization *
          </label>
          <InputText
            id="organization"
            name="organization"
            value={formData.organization || ''  }
            onChange={handleFormChange}
            required
            className={formErrors?.organization ? "p-invalid" : ""}
          />
          {formErrors?.organization && (
            <small className="p-error">Organization is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="tank"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Tank *
          </label>
          <InputText
            id="tank"
            name="tank"
            value={formData.tank || '' }
            onChange={handleFormChange}
            required
            className={formErrors?.tank ? "p-invalid" : ""}
          />
          {formErrors?.tank && (
            <small className="p-error">Tank is required.</small>
          )}
        </div>
        <div className="p-field p-col">
          <label
            htmlFor="tankshape"
            className="p-col-fixed"
            style={{ width: "100px" }}
          >
            Tank Shape *
          </label>
          <InputText
            id="tankshape"
            name="tankshape"
            value={formData.tankshape || ''  }
            onChange={handleFormChange}
            required
            className={formErrors?.tank ? "p-invalid" : ""}
          />
          {formErrors?.tankshape && (
            <small className="p-error">Tank Shape is required.</small>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default CreateDialog;
