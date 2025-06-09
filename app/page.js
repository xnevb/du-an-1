import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import projectData from "../project_data.json";

const Home = async () => {
  const {
    projectInfo,
    banner,
    marketAnalysis,
    operatingModel,
    services,
    call_to_action
  } = projectData;

  const { title } = config.site;

  return (
    <>
      <SeoMeta title={projectInfo.name} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* Features */}
      <HomeFeatures advantages={marketAnalysis.advantages} />

      {/* services */}
      <Services services={services} />

      {/* workflow */}
      <Workflow process={operatingModel.process} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
};

export default Home;
