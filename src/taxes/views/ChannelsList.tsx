import useNavigator from "@saleor/hooks/useNavigator";
import useShop from "@saleor/hooks/useShop";
import React from "react";

import { taxConfigurations } from "../fixtures";
import TaxChannelsPage from "../pages/TaxChannelsPage";
import { channelsListUrl, taxTabSectionUrl } from "../urls";

interface ChannelsListProps {
  id: string;
}

export const ChannelsList: React.FC<ChannelsListProps> = ({ id }) => {
  const navigate = useNavigator();
  const shop = useShop();

  const handleTabChange = (tab: string) => {
    navigate(taxTabSectionUrl(tab));
  };

  React.useEffect(() => {
    if (id === "undefined" && taxConfigurations) {
      navigate(channelsListUrl(taxConfigurations[0].channel.id));
    }
  }, [id, taxConfigurations]);

  return (
    <TaxChannelsPage
      taxConfigurations={taxConfigurations} // TODO: change fixture to query data
      countries={shop?.countries}
      selectedChannelId={id}
      handleTabChange={handleTabChange}
    />
  );
};

export default ChannelsList;
