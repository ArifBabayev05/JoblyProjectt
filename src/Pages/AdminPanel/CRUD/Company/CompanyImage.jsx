import React from 'react'
import axios from 'axios';

class CompanyImage extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }
    

    submit() {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:53410/api/Company/fileUpload";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="">

                        <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />

                        <button type="submit" className="btn btn-dark" onClick={() => this.submit()}>Əlavə Et</button>


                    </div>
                </div>
            </div >
        )
    }
}

export default CompanyImage;