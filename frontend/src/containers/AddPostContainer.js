import React, { Component } from 'react';
import AddPost from '../components/AddPost';
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

class AddPostContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      addPostModalOpen: false
    }
  }
  openAddPostModel() {
    this.setState({
      addPostModalOpen: true
    });
  }
  closeAddPostModel() {
    this.setState({
      addPostModalOpen: false
    })
  }
  componentWillMount() {
    Modal.setAppElement('body');
 }
  render() {
    const { addPostModalOpen } = this.state;
    return (
      <div>
        <button onClick={() => this.openAddPostModel()}>
          Add a post!
        </button>
        <br/>
        <Link to={'/'}>Home</Link>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={addPostModalOpen}
          onRequestClose={this.closeAddPostModel}
          contentLabel='Modal'
        >
          <AddPost
            closeAddPost={() => this.closeAddPostModel()}
          />
        </Modal>
      </div>
    );
  }
}

export default AddPostContainer;
