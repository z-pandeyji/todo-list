import React, { useState, useEffect } from 'react';
import { Modal, Button, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

const EditTask = ({ modal, toggle, update, taskObj }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, [taskObj.Description, taskObj.Name]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['Name'] = taskName;
    tempObj['Description'] = description;
    update(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update To-Do Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              name="taskName"
              className="form-control"
              value={taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{' '}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
