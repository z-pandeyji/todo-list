import React, { useState } from 'react';
import { Modal, Button, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
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

  const handleSave = () => {
    let taskObj = {};
    taskObj['Name'] = taskName;
    taskObj['Description'] = description;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create To-Do Task</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
