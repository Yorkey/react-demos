/**
 * Created by TOPFEEL on 2017/6/27.
 */
import React, {Component} from 'react';
import SignPanel from '../component/SignPanel';
import "../css/page/SignPage.css";

export default class SignPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      imgSrc: null,
      imgAlt: "",
    };
  }
  
  loadImage(imgFile) {
    if (imgFile) {
      let reader = new FileReader();
      //读取完成后触发
      reader.onload = (ev) => {
          //获取图片的url
          let imgSrc = ev.target.result;
          //console.log(imgSrc)
          this.setState({
            imgSrc: imgSrc,
            imgAlt: imgFile.name,
          });
      }
      //获取到数据的url 图片将转成 base64 格式
      reader.readAsDataURL(imgFile);
    }
  }
  
  componentDidMount() {
    this.refs.fileInput.onchange = (event) => {
      let imgFile = event.target.files[0];
      this.loadImage(imgFile);
    }

    this.refs.imgSelector.addEventListener("dragover", (event) => {
      event.preventDefault(); //阻止默认事件。比如说Chrome是直接将图片用浏览器打开
    });

    this.refs.imgSelector.addEventListener("drop", (event) => {
      event.preventDefault();
      let imgFile = event.dataTransfer.files[0];
      this.loadImage(imgFile);
    });
  }
  
  

  render() {
    return (
      <div>
        {
          !this.state.imgSrc &&
          <div ref="imgSelector" className="imgSelector" href="javascript:;" >
            <label htmlFor="fileInput" className="imgSelectorLabel"><span>拖动图片或点击</span></label>
            <input ref="fileInput" id="fileInput" type="file" accept="image/*" />
          </div>
        }
        {
          !!this.state.imgSrc &&
          <img src={this.state.imgSrc} alt={this.state.imgAlt} />
        }
      </div>
    );
  }
}