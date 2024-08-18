import React,{useState} from 'react'
import Header from '../global-components/Header'
import LeftSidebar from './LeftSidebar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';

function AddNewLesson() {

  const [value, setValue] = useState('');

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    console.log(editor.getHTML()); // You can also use editor.getText() for plain text
  };

  return (
    <>
    <div className="d-flex">
      <LeftSidebar />
      <div className="flex-grow-1">
        <div className="wrap">
          <h3>Add New Lesson</h3>
          
          <div class="row">
            <div class="col-md-12">
              <form class="form-inline" role="form">           
                <input type="text" class="form-control input-lg" id="search-church" placeholder="Add Title" />
                <br />
                <Button className='btn-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                  </svg>
                  &nbsp;&nbsp;Add media</Button>
                <br /> <br />
                <ReactQuill value={value} onChange={handleChange} /> 
              </form>
            </div>
          </div>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default AddNewLesson