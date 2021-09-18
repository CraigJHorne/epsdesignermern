import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../../actions/itemsActions";
import { useHistory, useRouteMatch } from "react-router";
import { getNames } from "../../components/Logic/getNames";
import { reorderItems } from "../../components/Logic/reorderItems";
import "./DesignPackView.css";
import Item from "../../components/Item/Item";
import { Button } from "react-bootstrap";

const DesignPackView = () => {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const itemList = useSelector((state) => state.itemList);
  const { items } = itemList;

  const itemCreate = useSelector((state) => state.itemCreate);
  const { success: successItemCreate } = itemCreate;

  const collectionUpdate = useSelector((state) => state.collectionUpdate);
  const { loading, error } = collectionUpdate;

  const collectionDelete = useSelector((state) => state.collectionDelete);
  const { loading: loadingDelete, error: errorDelete } = collectionDelete;

  var itemsOrdered = reorderItems(items);

  var titleUpperCase = "";

  if (title) {
    titleUpperCase = title.toUpperCase();
  }

  const names = getNames(itemsOrdered);

  const goBackHandler = () => {
    window.location.href = `/mydesignpacks`;
  };

  useEffect(() => {
    dispatch(listItems(match.params.id));
    const fetching = async () => {
      const { data } = await axios.get(`/api/collections/${match.params.id}`);

      setTitle(data.title);
    };

    fetching();
  }, [dispatch, successItemCreate, match.params.id]);

  return (
    <React.Fragment>
      <Button
        className="mx-5 mt-3 invisibleOnPrint"
        onClick={goBackHandler}
        variant="info"
      >
        Back to My Design Packs
      </Button>
      <div container spacing={2}>
        {itemsOrdered.map((item, i) => {
          return (
            <div className="designPage" key={item._id}>
              <img
                alt=""
                src={`/publicassets/logos/${item.club}/all/${item.club}1white.svg`}
              />
              <div className="packText" contentEditable={true}>
                {titleUpperCase}
              </div>
              <div className="packItem">
                <div style={{ maxWidth: "23cm" }}>
                  <div
                    component="h4"
                    variant="h5"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    {names[i++]}
                  </div>
                  <div className="svgcontainer">
                    <Item
                      garment={item.garment}
                      sleeve={item.sleeve}
                      baseColor={item.baseColor}
                      patternColor={item.patternColor}
                      ssOrLs={item.ssOrLs}
                      topOrShorts={item.topOrShorts}
                      logosA={item.logosA}
                      logosB={item.logosB}
                      logosC={item.logosC}
                      logosD={item.logosD}
                      logosE={item.logosE}
                      logosF={item.logosF}
                      logosG={item.logosG}
                      set1Color={item.set1Color}
                      set2Color={item.set2Color}
                      set3Color={item.set3Color}
                      aColor={item.aColor}
                      bColor={item.bColor}
                      pattern={item.pattern}
                      design={item.design}
                      club={item.club}
                      breakPath={item.breakPath}
                      backgroundTone1={item.backgroundTone1}
                      backgroundTone2={item.backgroundTone2}
                      backgroundTone3={item.backgroundTone3}
                      backgroundTone4={item.backgroundTone4}
                      backgroundTone5={item.backgroundTone5}
                      backgroundTone6={item.backgroundTone6}
                      backgroundTone7={item.backgroundTone7}
                      backgroundTone8={item.backgroundTone8}
                      backgroundTone9={item.backgroundTone9}
                      backgroundTone10={item.backgroundTone10}
                      backgroundTone12={item.backgroundTone12}
                      backgroundTone13={item.backgroundTone13}
                      backgroundTone14={item.backgroundTone14}
                      backgroundTone15={item.backgroundTone15}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        className="mx-5 mt-3 invisibleOnPrint"
        onClick={goBackHandler}
        variant="info"
      >
        Back to My Design Packs
      </Button>
    </React.Fragment>
  );
};

export default DesignPackView;
