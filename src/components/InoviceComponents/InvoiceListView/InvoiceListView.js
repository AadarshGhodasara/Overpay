import React from "react";
import "./InvoiceListView.scss";
import { Dropdown, Pagination, Select, Table } from "antd";
import ReceiptIcon from "../../Icons/ReceiptIcon/ReceiptIcon";
import {
  getFirstLetterCapital,
  getFormatedNumber,
} from "../../../config/utils";
import MenuDotsIcon from "../../Icons/MenuDotsIcon/MenuDotsIcon";
import CopyIcon from "../../Icons/CopyIcon/CopyIcon";
import PrintIcon from "../../Icons/PrintIcon/PrintIcon";
import DownloadPDFIcon from "../../Icons/DownloadPDFIcon/DownloadPDFIcon";
import ShareLinkIcon from "../../Icons/ShareLinkIcon/ShareLinkIcon";
import ArchiveIcon from "../../Icons/ArchiveIcon/ArchiveIcon";
import ShortIcon from "../../Icons/ShortIcon/ShortIcon";
const InvoiceListView = () => {
  const { Option } = Select;
  const items = [
    { key: "1", label: "Copy", icon: <CopyIcon /> },
    { key: "2", label: "Print", icon: <PrintIcon /> },
    { key: "3", label: "Download PDF", icon: <DownloadPDFIcon /> },
    { key: "4", label: "Share Link", icon: <ShareLinkIcon /> },
    { key: "5", label: "Archive", icon: <ArchiveIcon /> },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "invoiceName",
      render: (invoiceName, otherData) => (
        <div className="invoiceNameStyle">
          <div className="invoiceNameStyle_iconWrapper">
            <ReceiptIcon />
          </div>
          <div className="invoiceNameStyle_contentWrapper">
            <span>{invoiceName}</span>
            <p>{otherData?.inVoiceNumber}</p>
          </div>
        </div>
      ),
      sorter: (a, b) => a?.invoiceName?.length - b?.invoiceName?.length,
      sortIcon: () => <ShortIcon />,
    },
    {
      title: "Date",
      dataIndex: "invoiceDate",
      sorter: (a, b) => a?.invoiceName?.length - b?.invoiceName?.length,
      sortIcon: () => <ShortIcon />,
    },
    {
      title: "Client",
      dataIndex: "clientName",
      sorter: (a, b) => a?.invoiceName?.length - b?.invoiceName?.length,
      sortIcon: () => <ShortIcon />,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => (
        <span className="priceLabel">${getFormatedNumber(price, 2)}</span>
      ),
      sorter: (a, b) => a?.invoiceName?.length - b?.invoiceName?.length,
      sortIcon: () => <ShortIcon />,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <div className={`statusWrapper statusWrapper_${status}`}>
          {getFirstLetterCapital(status)}
        </div>
      ),
    },
    {
      title: "Action",
      render: () => (
        <Dropdown menu={{ items }} className="actionDropdown">
          <div className="tableMenuWrapper">
            <MenuDotsIcon />
          </div>
        </Dropdown>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      invoiceName: "New Design Project",
      inVoiceNumber: "INV110XXX",
      invoiceDate: "January 05, 2022",
      clientName: "Biffco Enterprises",
      price: "1240.00",
      status: "unpaid",
    },
    {
      key: "2",
      invoiceName: "Crypto Project",
      inVoiceNumber: "INV109XXX",
      invoiceDate: "January 02, 2022",
      clientName: "Acme Co.",
      price: "4367.67",
      status: "unpaid",
    },
    {
      key: "3",
      invoiceName: "Sarimun Design",
      inVoiceNumber: "INV108XXX",
      invoiceDate: "January 01, 2022",
      clientName: "Big Kahuna Burger",
      price: "980.00",
      status: "pending",
    },
    {
      key: "4",
      invoiceName: "Abstergo Development",
      inVoiceNumber: "INV107XXX",
      invoiceDate: "January 01, 2022",
      clientName: "Abstergo Ltd.",
      price: "5789.00",
      status: "refund",
    },
    {
      key: "5",
      invoiceName: "Barone Website",
      inVoiceNumber: "INV106XXX",
      invoiceDate: "December 29, 2021",
      clientName: "Barone LLC.",
      price: "3567",
      status: "paid",
    },
    {
      key: "6",
      invoiceName: "Biffco Mobile App",
      inVoiceNumber: "INV105XXX",
      invoiceDate: "December 25, 2021",
      clientName: "Biffco Enterprises",
      price: "6345.23",
      status: "paid",
    },
    {
      key: "7",
      invoiceName: "Biffco Mobile App",
      inVoiceNumber: "INV110XXX",
      invoiceDate: "December 25, 2021",
      clientName: "Biffco Enterprises",
      price: "6345.23",
      status: "paid",
    },
  ];
  return (
    <div className="InvoiceListViewStyle">
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="InvoiceListViewStyle_paginationWrapper">
        <div className="sizeSelectionWrapper">
          <span>Show result:</span>
          <Select value={"7"}>
            <Option key={"7"} value={"7"}>
              7
            </Option>
          </Select>
        </div>
        <Pagination total={data?.length} defaultPageSize={7} />
      </div>
    </div>
  );
};
export default InvoiceListView;
