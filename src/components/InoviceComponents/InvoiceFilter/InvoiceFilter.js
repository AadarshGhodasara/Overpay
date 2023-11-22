import React from "react";
import "./InvoiceFilter.scss";
import SearchInput from "../../Global/SearchInput/SearchInput";
import GlobalButton from "../../Global/GlobalButton/GlobalButton";
import ReceiptEditIcon from "../../Icons/ReceiptEditIcon/ReceiptEditIcon";
import FilterComponent from "../../Global/FilterComponent/FilterComponent";
export default function InvoiceFilter() {
  return (
    <div className="InvoiceFilterStyle">
      <SearchInput
        placeholder={"Search for transactions..."}
        className="InvoiceFilterStyle_search"
      />
      <div className="RightSideWrapper">
        <GlobalButton
          title={"Create invoice"}
          icon={<ReceiptEditIcon />}
          className="RightSideWrapper_invoiceButton"
        />
        <FilterComponent className="RightSideWrapper_invoiceFilter" />
      </div>
    </div>
  );
}
