import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCollectionAction,
  listCollections,
} from "../../actions/collectionsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";

const MyDesignPacks = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const collectionList = useSelector((state) => state.collectionList);
  const { loading, error, collections } = collectionList;

  const collectionCreate = useSelector((state) => state.collectionCreate);
  const { success: successCreate } = collectionCreate;

  const collectionUpdate = useSelector((state) => state.collectionUpdate);
  const { success: successUpdate } = collectionUpdate;

  const collectionDelete = useSelector((state) => state.collectionDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = collectionDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCollectionAction(id));
    }
  };

  useEffect(() => {
    dispatch(listCollections());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    successCreate,
    successUpdate,
    successDelete,
    loadingDelete,
    errorDelete,
    history,
    userInfo,
  ]);

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}`}>
      <Link
        to="createdesignpack"
        style={{ marginLeft: 10, marginBottom: 6 }}
        size="lg"
      >
        <Button className="mb-3">Create New Design Pack</Button>
      </Link>
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {collections?.reverse().map((collection) => (
        <Card className="my-1" key={collection._id} margin={{ display: "10" }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {collection.title}
            </span>
            <div>
              <Button
                className="mx-2"
                variant="info"
                href={`/collections/designpackview/${collection._id}`}
              >
                PDF View
              </Button>
              <Button
                className="mx-2"
                href={`/collections/collection/${collection._id}`}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(collection._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyDesignPacks;
