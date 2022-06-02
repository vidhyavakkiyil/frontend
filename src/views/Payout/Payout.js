import { Badge, Bar, Breadcrumbs, Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, Icon, Label, List, Popover, StandardListItem, Title } from '@ui5/webcomponents-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MainHeader from '../../components/MainHeader/MainHeader';
import Config from '../../Config';
import CustomToolbar from '../DOI/components/Toolbar/Toolbar';
import BalanceAdjustment from './BalanceAdjustment/BalanceAdjustment';
import PayoutHeader from './PayoutHeader/PayoutHeader';
import PayoutHeaderSkeleton from './PayoutHeader/PayoutHeaderSkeleton';
import PayoutHeaderTable from './PayoutHeader/PayoutHeaderTable';
import PayoutProvisions from './Provisions/Provisions';

function Payout(props) {
    console.log(props)
    const navigate = useNavigate();

    const initialFormState = {
        company: [],
        venture: [],
        owner: [],
        well: [],
        payout_type: [],
        bpo_doi: [],
        apo_doi: [],
        reporting_frequency: [],
    };
    const [payoutFormMasterData, setPayoutFormMasterData] =
        useState(initialFormState);
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const initialFormData = {
        company: "",
        venture: "",
        owner: "",
        well: "",
        payout_type: "",
        bpo_doi: "",
        apo_doi: "",
        reporting_frequency: "",
        start_date: "",
        end_date: "",
        bal_adj_total: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [populateFormData, setPopulateFormData] = useState(initialFormData);
    const [formDataChanged, setFormDataChanged] = useState(false);
    const onChangeFormHandler = async (event, values) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.id.split("-")[0]]: values,
        }));
        setFormDataChanged(true);
    };
    useEffect(() => {
        filterData();
    }, [formData]);
    const onChangeDateHandler = async (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const filterData = async () => {
        let data = {};
        data.company = formData.company ? formData.company.split(" - ")[0] : "";
        data.venture = formData.venture ? formData.venture.split(" - ")[0] : "";
        data.owner = formData.owner ? formData.owner.split(" - ")[0] : "";
        data.well = formData.well ? formData.well.split(" - ")[0] : "";
        data.payout_type = formData.payout_type ? formData.payout_type : "";
        data.bpo_doi = formData.bpo_doi ? formData.bpo_doi : "";
        data.apo_doi = formData.apo_doi ? formData.apo_doi : "";
        data.reporting_frequency = formData.reporting_frequency
            ? formData.reporting_frequency
            : "";
        data.start_date = formData.start_date ? formData.start_date : "";
        data.end_date = formData.end_date ? formData.end_date : "";
        let url = Config.NODE_API_BASE_URL + Config.GET_PAYOUT_TABLE_DATA;
        if (isLoading !== true) {
            setIsLoading(true);
        }
        await axios
            .post(url, data)
            .then((res) => {
                console.log("res.data", res.data);
                setIsLoading(false);
                setTableData(res.data);
                if (formDataChanged === true) {
                    setPopulateFormData({
                        company: res.data[0].company + " - " + res.data[0].company_name,
                        venture: res.data[0].venture + " - " + res.data[0].venture_name,
                        owner: res.data[0].owner_ID + " - " + res.data[0].owner_name,
                        well: res.data[0].well_ID + " - " + res.data[0].well_name,
                        payout_type: res.data[0].payout_type,
                        bpo_doi: res.data[0].BPO_DOI,
                        apo_doi: res.data[0].APO_DOI,
                        reporting_frequency: res.data[0].reporting_frequency,
                        start_date: res.data[0].start_date,
                        end_date: res.data[0].end_date,
                    });
                    setFormDataChanged(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFormMasterData = async () => {
        let url = Config.NODE_API_BASE_URL + Config.GET_PAYOUT_FORM_MASTER_DATA;
        await axios
            .get(url)
            .then((res) => {
                console.log("res.data", res.data);
                setPayoutFormMasterData({
                    company: res.data.company,
                    venture: res.data.venture,
                    owner: res.data.owner,
                    well: res.data.well,
                    payout_type: res.data.payout_type,
                    bpo_doi: res.data.bpo_doi,
                    apo_doi: res.data.apo_doi,
                    reporting_frequency: res.data.reporting_frequency,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getFormMasterData();
    }, []);

    useEffect(() => {
        console.log("payoutFormMasterData::", payoutFormMasterData);
    }, [payoutFormMasterData]);

    const handleAddPayoutButtonClicked = async () => {
        let data = formData;
        let ownerId = formData.owner ? formData.owner.split(" - ")[0] : "";
        if (ownerId) {
            let url =
                Config.NODE_API_BASE_URL +
                Config.SAVE_CALCULATED_BALANCE_ADJUSTMENT +
                ownerId;
            setIsLoading(true);
            await axios
                .post(url, data)
                .then((res) => {
                    alert("Bal Adjustment Amount has been saved successfully");
                    console.log(res.data)
                    let tableDataCopy = [...tableData];
                    tableDataCopy[0].bal_adj_total = formData.bal_adj_total;
                    setTableData([...tableDataCopy]);
                    setIsLoading(false);
                    //filterData();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const [openBalAdjDialog, setOpenBalAdjDialog] = useState(false);
    const handleBalAdjBtnClicked = () => {
        setOpenBalAdjDialog(true);
    };
    const handleBalAdjDialogClose = () => {
        setOpenBalAdjDialog(false);
    };

    const [balAdjData, setBalAdjData] = useState({});

    const [openProvisionDialog, setOpenProvisionDialog] = useState(false);
    const [provisionOwnerId, setProvisionOwnerId] = useState("");

    const handleProvisionDialogClose = () => {
        setOpenProvisionDialog(false);
    };
    const [provisionTableData, setProvisionTableData] = useState([]);
    const viewProvisions = async (ownerId) => {
        setProvisionOwnerId(ownerId);
    };
console.log(provisionTableData)
    async function fetchProvisionData(ownerId) {
        if (ownerId) {
            let url =
                Config.NODE_API_BASE_URL + Config.GET_PROVISIONS_BY_OWNER_ID + ownerId;
            await axios
                .get(url)
                .then((res) => {
                    setProvisionTableData(res.data);
                    setOpenProvisionDialog(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    const [navigationItems, setNavigationItems] = useState([
        <Button
            key={"fullscreen"}
            icon="full-screen"
            design={ButtonDesign.Transparent}
        />,
        <Button
            key={"exitFullscreen"}
            icon="exit-full-screen"
            design={ButtonDesign.Transparent}
        />,
        <Button key={"decline"} icon="decline" design={ButtonDesign.Transparent} />,
    ]);
    const [actionItems, setActionItems] = useState([
        <div style={{ marginTop: "10px" }}>
            <Button key={"go"} design={ButtonDesign.Emphasized}>
                Go
            </Button>,
            <Button key={"hide filter bar"} design={ButtonDesign.Transparent}>
                Hide Filter Bar
            </Button>,
            <Button key={"filters"} design={ButtonDesign.Transparent}>
                Filters
            </Button>,
        </div>
    ]);
    useEffect(() => {
        fetchProvisionData(provisionOwnerId);
    }, [provisionOwnerId]);



    return (
        <><Title style={{ color: "#0854a0", position: "sticky", marginLeft: "10px", marginTop: "10px" }} level={"H3"} wrappingType="None" >
            <MainHeader title={"Payout"}/>
        </Title><CustomToolbar filterData={filterData} Name={"Payout"} />


            

            <DynamicPage
                {...props} 
                //alwaysShowContentHeader
                headerContentPinnable
                showHideHeaderButton
                backgroundDesign="Solid"
                description="Inquiry - Setup - Transfers"
                // headerTitle={
                //     <DynamicPageTitle style={{ color: "#0854a0",position:"sticky" }}
                //         breadcrumbs={<Title level={"H3"} wrappingType="None"   style={{ color: "#0854a0",height:"10px" }} >
                //             Payout Inquiry & Setup  <Icon name="slim-arrow-down" tooltip="slim-arrow-down" design="Transparent" />

                //         </Title>}
                //         navigationActions={<CustomToolbar filterData={filterData} />}
                //         //showSubHeaderRight
                //     >

                //     </DynamicPageTitle>
                // }
                headerContent={
                    <DynamicPageHeader headerPinned>
                        {payoutFormMasterData &&
                            payoutFormMasterData.company &&
                            payoutFormMasterData.company.length ? (
                            <PayoutHeader
                                payoutFormMasterData={payoutFormMasterData}
                                formData={formData}
                                isLoading={isLoading}
                                populateFormData={populateFormData}
                                onChangeFormHandler={onChangeFormHandler}
                                onChangeDateHandler={onChangeDateHandler}
                                filterData={filterData}
                                handleAddPayoutButtonClicked={handleAddPayoutButtonClicked}
                                handleBalAdjBtnClicked={handleBalAdjBtnClicked}
                            />
                        ) : (
                            <PayoutHeaderSkeleton filterData={filterData} />
                        )}

                    </DynamicPageHeader>
                }
            >
                 <BalanceAdjustment
                    tableData={tableData}
                    open={openBalAdjDialog}
                    balAdjData={balAdjData}
                    setBalAdjData={setBalAdjData}
                    handleClose={handleBalAdjDialogClose}
                    setFormData={setFormData}
                    handleBalAdjDialogClose={handleBalAdjDialogClose}
                />
                <PayoutHeaderTable
                    title={"Payout Details"}
                    actions={["provisions", "position"]}
                    viewProvisions={viewProvisions}
                    tableData={tableData}
                    isLoading={isLoading}
                    provisionTableData={provisionTableData}
                    pageSize={5}
                    style={{
                        overflow: "scroll",
                        height: "auto",
                        //   overflowX: "hidden",
                        //   overflowY: "hidden",
                        marginRight: 0,
                        marginLeft: 0,
                        paddingLeft: 0,
                    }}
                />
               
            </DynamicPage></>
    )
}

export default Payout
