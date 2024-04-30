import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// import { ProductService } from './service/ProductService';
import "./table.css";
import CreateDialog from "./CreateDialog";
import { TableService } from "../context/services/tableService";
export default function Table() {
  const [deleteDialog, setdeleteDialog] = useState(false);
  const [createDialog, setcreateDialog] = useState(false);
  const tableService = new TableService();

  const [tableData, setTableData] = useState();
  const convergetoken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMDhjOTZkOC1mMjFhLTRmMDItOWVkOC0yNTVlMzcxNzM5NDMiLCJzdWIiOiI1YTIxM2ZhYi0zYWYzLTQzZDEtOTQ0Mi0wOGRjMWQ2Y2Y1MzEiLCJlbWFpbCI6InRlc3QxQG9jdGFuLmNvbSIsImFtciI6InB3ZCIsImlhdCI6MTcwNjg0MzE1MiwidmVyIjoiMSIsInRlbmFudCI6Im9jdGFuIiwiYXBwX3JvbGUiOiJUZW5hbnQgQWRtaW4iLCJleHAiOjE3MDY4NDY3NTIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDAvYXBpL0NvbnZlcmdlT0F1dGgiLCJhdWQiOiIwb2E5N2w5NHhpM0tkS0xPNzVkNyJ9.QFL9v3v8Kij_NW0-lMCY50y1BsrzK61MsCFNqzWAxTYZihesmWRzworUGfiG_pE-gtYyLMwcuFgYf095uTJSleUffrIKsd72D3aLaJ7TKorH27uvJsNcaAaVd4TsAdzUXCizt7Zfc1huvZWO3I35b0bRM-LLyy40FlV8_CbarK66xe_PxOCKsyO9KrbfF8s8_xC8dtkI_6ufwOSsQRcdmSJhghMtwHW6u078IfluWYgZoluN5wJiehB6u9erHJ83ewh8ZaaCnC5NhnSHl7hUUgrqhB8HIiFT0oPIImN5S911sq74-X2W9OgDdhSTjdcbXM8Wgz86syicL4enRBHiDK2pXI2dec8-H9bFjlvuzkLjtEiyUInJ6KbmOC-zNcVC4MCOjuVxYx1uL7agKHyB3TVJr9lA2pg6zRG0Gg7lE4-vrz1846HWVVu2gdT_U-jGebeF8V0Yrn45jKsoHwIzrPFciLErQt9iYgoGC3jLAX9661ad7nF0Ymo_PQu4cpji";
  useEffect(() => {
    tableService
      .getTableDetails()
      .then((result) => {
        setTableData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [createDialog]);
  //child component props
  const [formData, setFormData] = useState({
    Asset: "",
    Organization: "",
    Tank: "",
    Tankshape: "",
  });

  const [formErrors, setFormErrors] = useState({
    Asset: false,
    Organization: false,
    Tank: false,
    Tankshape: false,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleFormSubmit = () => {
    const newFormErrors = {
      Asset: !formData.Asset || formData.Asset.trim() === "",
      Organization:
        !formData.Organization || formData.Organization.trim() === "",
      Tank: !formData.Tank || formData.Tank.trim() === "",
      Tankshape: !formData.Tankshape || formData.Tankshape.trim() === "",
    };

    const hasErrors = Object.values(newFormErrors).some((error) => error);

    // Update form errors state
    setFormErrors(newFormErrors);

    if (!hasErrors) {
      // Call your create API here with formData
      console.log(formData, "form data");
      const payloadData = {
        // data : formData
        // formData
        // token : convergetoken
        Asset: formData.Asset,
        Tank: formData.Tank,

        TankShape: formData.Tankshape,

        Organization: formData.Organization,
      };
      console.log(payloadData);

      // Assuming you have a service function named tableService.createRecord
      tableService
        .createRecord(payloadData)
        .then((response) => {
          console.log("Record created successfully:", response.data);
          // Close the dialog
          setcreateDialog(false); // Fix the typo: it should be setCreateDialog
          // Reset form data
          setFormData({});
          setFormErrors({});
        })

        .catch((error) => {
          console.error("Error creating record:", error);
          // Handle error
        });
    }
  };

  //child component props

  const handleDelete = () => {
    setdeleteDialog(true);
  };
  const handlecloseDialog = () => {
    setdeleteDialog(false);
  };
  const openCreateDialog = () => {
    console.log(formData, "formdata");
    setcreateDialog(true);
    setFormErrors(null);
    setFormData({});
  };
  const closeCreateDialog = () => {
    setFormErrors(null);
    setFormData({});

    setcreateDialog(false);
  };

  const footerContent = (
    <div>
      <Button
        style={{ color: "Black" }}
        label="Cancel"
        // icon="pi pi-trash"
        onClick={handlecloseDialog}
        autoFocus
      />
      <Button
        style={{ color: "Black" }}
        label="Delete"
        icon="pi pi-trash"
        onClick={handlecloseDialog}
        autoFocus
      />
    </div>
  );
  const createFooterContent = (
    <div>
      <Button
        style={{ color: "Black" }}
        label="Cancel"
        // icon="pi pi-trash"
        onClick={handlecloseDialog}
        autoFocus
      />
      <Button
        style={{ color: "Black" }}
        label="Delete"
        icon="pi pi-trash"
        onClick={handlecloseDialog}
        autoFocus
      />
    </div>
  );

  // useEffect(() => {
  //     ProductService.getProductsMini().then(data => setProducts(data));
  // }, []);

  const actionsBody = () => {
    return (
      <button onClick={handleDelete}>
        {" "}
        <b>
          {" "}
          <i className="pi pi-trash" />
        </b>
      </button>
    );
  };
  return (
    <div className="card">
      <Button
        style={{ color: "Blue", marginBottom: "5px" }}
        label="Create"
        // icon="pi pi-trash"
        onClick={openCreateDialog}
        autoFocus
      />
      <DataTable
        value={tableData}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
        stripedRows
      >
        <Column field="Asset" header="Asset"></Column>
        <Column field="Tank" header="Tank"></Column>
        <Column field="TankShape" header="TankShape"></Column>
        <Column field="Organization" header="Organization"></Column>
        <Column field="Actions" header="Actions" body={actionsBody}></Column>
      </DataTable>

      <Dialog
        header="Delete Record"
        visible={deleteDialog}
        style={{ width: "50vw" }}
        footer={footerContent}
      >
        <p className="m-0">Do you want to delete the Record?</p>
      </Dialog>

      <CreateDialog
        createDialog={createDialog}
        openCreateDialog={openCreateDialog}
        closeCreateDialog={closeCreateDialog}
        footerContent={footerContent}
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        formErrors={formErrors}
      />
    </div>
  );
}
