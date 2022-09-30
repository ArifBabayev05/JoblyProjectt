import axios from 'axios'
import React, { Component } from 'react'

class CompanyImage extends Component {

    
    state = {
        data: ""
    }
    handleFile(e) {
        let file = e.target.files
        this.setState({
            file: file,
        })
    }
    handleUpload(e) {
        let file = this.state.file[0];
        let formData = new FormData();
        formData.append('imageFile', file);
        formData.append('name', "file");
        axios.post(`http://localhost:53410/api/Company/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


    }
    render() {
        return (
            <div>
                <h1>Form</h1>
                <form>
                    <div>
                        <label>Select File</label>
                        <input type='file' onChange={(e) => this.handleFile(e)} />
                        <button type='button' onClick={(e) => this.handleUpload(e)}>Upload</button>
                    </div>
                </form>
            </div>
        )
    }



}

export default CompanyImage;