import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directoy-item.styles";

import { useNavigate } from "react-router-dom";

const DirectoryItem = (props) => {
  const { imageUrl, title, route } = props;
  const navigate = useNavigate();
  const onNavigationHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigationHandler}>
      <BackgroundImage style={{ backgroundImage: `URL(${imageUrl})` }} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
