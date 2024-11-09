import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | FILMHIVE</title>
    </Helmet>
  );
};

export default PageTitle;
