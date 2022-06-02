import { Badge, Bar, Button, ButtonDesign, Card, DynamicPage, DynamicPageHeader, DynamicPageTitle, FilterBar, FilterGroupItem, Icon, Input, Label, List, Popover, StandardListItem, Title } from '@ui5/webcomponents-react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import CustomDynamicPage from '../../components/DynamicPage/DynamicPage'
import MainHeader from '../../components/MainHeader/MainHeader';
import Config from '../../Config';
import DOIHeader from '../DOI/components/DOIHeader/DOIHeader'
import CustomToolbar from '../DOI/components/Toolbar/Toolbar';
import BusinessAssociateHeader from './Component/BAHeader/BAHeader';
import BusinessAssociateHeaderSkeleton from './Component/BAHeader/BAHeaderSkelton';
import BATabs from './Component/BATabs';

function BusinessAssociate(args) {
    const [headerData, setHeaderData] = useState({
        ba_number: "",
        name_1: "",
        address_1: "",
        address_2: "",
        address_3: "",
    });
    const initialFormState = {
        ba_number: [],
        owner_name: [],
    };
    const [businessAssociateFormData, setBusinessAssociateFormData] =
        useState(initialFormState);

    const [businessAssociateTableData, setBusinessAssociateTableData] = useState(
        []
    );
    const [
        businessAssociateDetailsTableData,
        setBusinessAssociateDetailsTableData,
    ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const initialFormData = {
        ba_number: "",
        owner_name: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    useEffect(() => {
        getFormData();
    }, []);
    const onChangeFormHandler = async (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const filterData = async () => {
        let data = formData;
        let url =
            Config.NODE_API_BASE_URL + Config.GET_BUSINESS_ASSOCIATE_TABLE_DATA;
        setIsLoading(true);
        await axios
            .post(url, data)
            .then((res) => {
                console.log("res.data", res.data);
                if (formData.ba_number === "") {
                    setFormData((prev) => ({
                        ...prev,
                        ba_number: res.data[0].ba_number,
                    }));
                } else if (formData.owner_name === "") {
                    setFormData((prev) => ({
                        ...prev,
                        owner_name: res.data[0].name_1,
                    }));
                }
                setBusinessAssociateTableData(res.data);
                setBusinessAssociateDetailsTableData(res.data);
                setHeaderData({
                    ba_number: res.data[0].ba_number,
                    name_1: res.data[0].name_1,
                    address_1: res.data[0].address_1,
                    address_2: res.data[0].address_2,
                    address_3: res.data[0].address_3,
                });
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFormData = async () => {
        let url =
            Config.NODE_API_BASE_URL + Config.GET_BUSINESS_ASSOCIATE_FORM_DATA;
        console.log("url:" + url)
        await axios
            .get(url)
            .then((res) => {
                console.log("res.data", res.data);
                setBusinessAssociateFormData({
                    ba_number: res.data.ba_number,
                    owner_name: res.data.owner_name,
                });
            })
            .catch((err) => {
                console.log("err :::" + err);
            });
    };



    useEffect(() => {
        console.log("businessAssociateFormData::", businessAssociateFormData);
    }, [businessAssociateFormData]);

    const cancelButtonHandler = async () => {
        setFormData(initialFormData);
        setBusinessAssociateTableData([]);
        setHeaderData({
            ba_number: "",
            name_1: "",
            address_1: "",
            address_2: "",
            address_3: "",
        });
    };
    useEffect(() => {
        getFormData();
    }, []);
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
            <Button key={"hide filter bar"} design={ButtonDesign.Transparent}>
                Hide Filter Bar
            </Button>,
            <Button key={"filters"} design={ButtonDesign.Transparent}>
                Filters
            </Button>,
        </div>
    ]);




    return (
        <><Title style={{ color: "#0854a0", position: "sticky", marginLeft: "10px", marginTop: "10px" }} level={"H3"} wrappingType="None" >
           <MainHeader title={"Business Associative"}/>
        </Title><CustomToolbar filterData={filterData} Name={"Business Associative"} />


            <DynamicPage
                {...args}
                //alwaysShowContentHeader
                headerContentPinnable
                showHideHeaderButton
                backgroundDesign="Solid"
                description="Inquiry - Setup - Transfers"
                // headerTitle={
                //     <DynamicPageTitle
                //         breadcrumbs={<Title level={"H3"} wrappingType="None" style={{ color: "#0854a0"}}>
                //             Business Partner Information <Icon name="slim-arrow-down" tooltip="slim-arrow-down" design="Transparent" />
                //         </Title>}
                //         navigationActions={<CustomToolbar filterData={filterData} />}
                //         //showSubHeaderRight
                //     >

                //     </DynamicPageTitle>
                // }
                headerContent={
                    <DynamicPageHeader headerPinned>
                        {businessAssociateFormData &&
                            businessAssociateFormData.ba_number &&
                            businessAssociateFormData.ba_number.length ? (
                            <BusinessAssociateHeader
                                businessAssociateFormData={businessAssociateFormData}
                                formData={formData}
                                isLoading={isLoading}
                                onChangeFormHandler={onChangeFormHandler}
                                filterData={filterData}
                                cancelButtonHandler={cancelButtonHandler}
                            //handleAddDeckHeaderDialogOpen={handleAddDeckHeaderDialogOpen}
                            />
                        ) : (
                            <BusinessAssociateHeaderSkeleton filterData={filterData} isLoading={isLoading} />
                        )}
                    </DynamicPageHeader>
                }
            >
                <BATabs
                    isLoading={isLoading}
                    businessAssociateTableData={businessAssociateTableData}
                    businessAssociateDetailsTableData={businessAssociateDetailsTableData ? businessAssociateDetailsTableData : businessAssociateFormData}
                    headerData={headerData}
                />
            </DynamicPage></>
    );

}

export default BusinessAssociate;