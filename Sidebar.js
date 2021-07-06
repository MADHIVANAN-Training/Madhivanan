import React from 'react';
import Logo from '../Components/logo/logo1.jpg.jpeg';
function Sidebar() {
    return (
      <div className="row">
      <div className="col-sm-2">
      <div className="wrapper">
       <nav id="sidebar">
        <div className="sidebar-header">
          <img src={Logo}/>
        </div>
        <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action" id="list-students-list" data-toggle="list" href="#list-students" role="tab" aria-controls="students"><i class="fa fa-user" aria-hidden="true"></i> Students</a>
      <a class="list-group-item list-group-item-action active" id="list-lessonplan-list" data-toggle="list" href="#list-lessonplan" role="tab" aria-controls="lessonplan"><i class="fa fa-book" aria-hidden="true"></i> Lesson</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"><i class="fa fa-cog" aria-hidden="true"></i>Settings</a>
      </div>
       </nav>
      </div>
      </div>
      <div className="bg col-sm-10">
      <div className="container-fluid mt-5">
      <p><i class="bi bi-caret-left-fill"></i>  Videos</p>
      <div className="container">
      <form>
      <div class="form-group">
    <input type="url" class="form-control" id="exampleInputurl1" aria-describedby="urlHelp" placeholder="Insert URL here"/>
     </div>
      </form>
      <p className="para">or</p>
      <form>
      <form>
      <div class="form-group">
        <label for="exampleFormControlFile1">Upload</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
      </div>
    </form>
</form>
      </div>
      </div>
      </div>
      </div>
      
    )
}

export default Sidebar;
