import React from "react";
import "./Invoices.scss";
import InvoiceFilter from "../../components/InoviceComponents/InvoiceFilter/InvoiceFilter";
import InvoiceListView from "../../components/InoviceComponents/InvoiceListView/InvoiceListView";
export default function Invoices() {
  return (
    <div className="InvoicesStyle">
      <InvoiceFilter />
      <InvoiceListView />
    </div>
  );
}
