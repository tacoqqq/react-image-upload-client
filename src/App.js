import React, { Component } from 'react';
import Spinner from './components/spinner/spinner';
import Buttons from './components/buttons/buttons'
import Images from './components/images/images';
import { API_ENDPOINT } from './config';
import './App.css';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			uploading: false,
			images: []
		}
	}

	onChange = (e) => {
		const uploadedImgs = Array.from(e.target.files)
		console.log(uploadedImgs)
		this.setState({
			uploading: true
		})

		const formData = new FormData()

		uploadedImgs.forEach((file,i) => {
			formData.append(i,file)
		})

		fetch(`${API_ENDPOINT}/img-upload`, {
			method: 'POST',
			body: formData
		})
		.then(res => {
			return res.json()
		})
		.then(resJson => {
			resJson.forEach(newImage => this.state.images.push(newImage))
			this.setState({
				uploading: false,
				images: this.state.images
			})
		})
	}


	removeImage = (imageId) => {
		this.setState({
			images: this.state.images.filter(image => image.public_id !== imageId)
		})
	}

	render(){
		const { uploading , images } = this.state
		const content = () => {
			switch(true){
				case uploading:
					return <Spinner />
				case images.length > 0:
					return (
						<div>
							<Buttons onChange={this.onChange} />
							<Images images={images} removeImage={this.removeImage} />
						</div>
					)
				default:
					return <Buttons onChange={this.onChange} />
			}
		}
		return(
			<div className='container'>
				<h2>React Image Uploader</h2>
				{content()}
			</div>
		)
	}
}

export default App;
