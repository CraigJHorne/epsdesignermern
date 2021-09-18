import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCollectionAction } from "../../actions/collectionsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";

function CreateCollection({}) {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const collectionCreate = useSelector((state) => state.collectionCreate);
  const { loading, error, collection } = collectionCreate;

  console.log(collection);

  const cancelHandler = () => {
    history.push("/mydesignpacks");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCollectionAction(title));
    if (!title) return;

    setTitle("");
    history.push("/mydesignpacks");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Collection">
      <Card>
        <Card.Header>Create a new Design Pack</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
                className="mb-3"
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Create Design Pack
            </Button>
            <Button className="mx-2" onClick={cancelHandler} variant="danger">
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default CreateCollection;
