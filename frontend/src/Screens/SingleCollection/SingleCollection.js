import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemAction,
  listItems,
  updateItemAction,
} from "../../actions/itemsActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useHistory, useRouteMatch } from "react-router";
import Item from "../../components/Item/Item";
import { getNames } from "../../components/Logic/getNames";
import { reorderItems } from "../../components/Logic/reorderItems";
import { updateCollectionAction } from "../../actions/collectionsActions";

function SingleCollection({}) {
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

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteItemAction(id));
      window.location.reload(false);
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCollectionAction(match.params.id, title));
    if (!title) return;

    setTitle("");
    history.push("/mydesignpacks");
  };

  return (
    <MainScreen title="Edit Design Pack">
      <Card>
        <Card.Header>Edit your Design Pack</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="mb-3"
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div>
                <Button
                  variant="outline-primary"
                  href={`/${match.params.id}/createitem`}
                >
                  Add item
                </Button>
                <Button
                  className="mx-2"
                  variant="info"
                  href={`/collections/designpackview/${match.params.id}`}
                >
                  PDF View
                </Button>
              </div>
            </Form.Group>

            {itemsOrdered?.map((item, i) => (
              <Accordion>
                <Card
                  className="my-1"
                  key={item._id}
                  margin={{ display: "10" }}
                >
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Toggle
                        style={{ display: "flex" }}
                        as={Card.Text}
                        variant="link"
                        eventKey="0"
                      >
                        <span
                          style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            alignSelf: "center",
                            fontSize: 18,
                          }}
                        >
                          {names[i++]}
                        </span>
                        <div>
                          <Button href={`/items/item/${item._id}`}>Edit</Button>
                          <Button
                            variant="danger"
                            className="mx-2"
                            onClick={() => deleteHandler(item._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Accordion.Toggle>
                    </span>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div style={{ width: "70%", margin: "auto" }}>
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
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}

            {loading && <Loading size={50} />}
            <Button className="mt-3" variant="primary" type="submit">
              Update Title
            </Button>
            <Button
              className="mx-2 mt-3 invisibleOnPrint"
              onClick={goBackHandler}
              variant="danger"
            >
              Back to My Design Packs
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default SingleCollection;
