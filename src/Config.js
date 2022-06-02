/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  NODE_API_BASE_URL: "http://localhost:4000/api", 
  //NODE_API_BASE_URL:""
   // "https://sap-pra-backend.cfapps.us10.hana.ondemand.com/api",

  //Revenue Deck Page URL
  GET_DECK_HEADER_FORM_DATA: "/revenue/getDeckHeaderFormData",
  GET_DECK_HEADER_TABLE_DATA: "/revenue/getDeckHeaderTableData",
  CREATE_NEW_DECK_HEADER_DATA: "/revenue/createNewDeckHeaderData/",

  //Owner Details
  GET_OWNER_HEADER_FORM_DATA: "/revenue/getOwnerHeaderFormData/",
  GET_OWNER_HEADER_FORM_DATA_FOR_CREATE:
    "/revenue/getOwnerHeaderFormDataForCreate/",
  GET_OWNER_DETAILS_TABLE_DATA: "/revenue/getOwnerDetailsTableData/",
  GET_OWNER_DETAILS_TABLE_DATA_FOR_CREATE:
    "/revenue/getOwnerDetailsTableDataForCreate/",
  CREATE_NEW_OWNER_DETAILS_DATA: "/revenue/createNewOwnerDetailsData",

    //Venture Page URL
    GET_VENTURE_FORM_DATA: "/revenue/getventureFormData",
    GET_VENTURE_TABLE_DATA: "/revenue/getventureTableData",
    CREATE_NEW_VENTURE_DATA: "/revenue/createventureData/",
  
   

  //Business Associate Page URL
  GET_BUSINESS_ASSOCIATE_FORM_DATA: "/business/getBusinessAssociateFormData",
  GET_BUSINESS_ASSOCIATE_TABLE_DATA: "/business/getBusinessAssociateTableData",
  // GET_OWNER_HEADER_FORM_DATA: "/revenue/getownerheaderformdata/",
  // GET_OWNER_DETAILS_TABLE_DATA: "/revenue/getownerdetailstabledata/",

  /*********************  PAYOUT ROUTES  **********************************/
  GET_PAYOUT_FORM_MASTER_DATA: "/payout/getPayoutFormMasterData",
  GET_PAYOUT_TABLE_DATA: "/payout/getPayoutTableData",
  SAVE_CALCULATED_BALANCE_ADJUSTMENT:
    "/payout/saveCalculatedBalanceAdjustment/",
  GET_PROVISIONS_BY_OWNER_ID: "/payout/getProvisionsByOwnerId/",
  GET_POSITION_HEADER_DATA: "/payout/getPositionHeaderData/",
  GET_POSITION_EXPENSE_TABLE_DATA: "/payout/getPositionExpenseTableData/",
  GET_POSITION_REVENUE_TABLE_DATA: "/payout/getPositionRevenueTableData/",
};
