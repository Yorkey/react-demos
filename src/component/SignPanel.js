/**
 * Created by TOPFEEL on 2017/6/28.
 */
import React, {Component} from 'react';
import '../css/component/SignPanel.css';

export default class SignPanel extends Component {

    static defaultProps = {
        lineWidth: 1.5,
        strokeStyle: "#333",
        canvasHeight: 300,
    };

    constructor(props) {
        super(props);
        
        this.screenTouchable = !!("ontouchend" in document);
        this.isDrawing = false;
    }

    _initPanel() {
        let {lineWidth, strokeStyle} = this.props;
        let { width, height} = this.signCanvas;
        
        if (this.signCanvas.getContext) {
            this.ctx = this.signCanvas.getContext('2d');
            this.ctx.clearRect(0, 0, width, height);
            this.ctx.lineWidth = lineWidth;
            this.ctx.strokeStyle = strokeStyle;

            if (this.screenTouchable) {
                this.signCanvas.addEventListener('touchstart', (e)=> {
                    e.preventDefault();
                    this.onSign('start', e.targetTouches[0].pageX, e.targetTouches[0].pageY);
                });
                this.signCanvas.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    this.onSign('move', e.targetTouches[0].pageX, e.targetTouches[0].pageY);
                });
                this.signCanvas.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    this.onSign('end');
                });
            } else {
                this.signCanvas.onmousedown = (e)=> {
                    e.preventDefault();
                    this.isDrawing = true;
                    this.onSign('start', e.pageX, e.pageY);
                };
                this.signCanvas.onmousemove = (e) => {
                    e.preventDefault();
                    if (this.isDrawing) {
                        this.onSign('move', e.pageX, e.pageY);
                    }
                };
                this.signCanvas.onmouseup = (e) => {
                    e.preventDefault();
                    if (this.isDrawing) {
                        this.onSign('end');
                    }
                    this.isDrawing = false;
                };
                this.signCanvas.onmouseout = (e) => {
                    e.preventDefault();
                    if (this.isDrawing) {
                        this.onSign('end');
                    }
                    this.isDrawing = false;
                };
            }

        }
    }

    onSign(step, x, y) {
        let { width, height, offsetLeft, offsetTop} = this.signCanvas;
        switch(step) {
            case 'start': 
                if (x-offsetLeft >= 0 && x-offsetLeft <= width && y-offsetTop >= 0 && y-offsetTop <= height) {

                    this.ctx.beginPath();
                    this.ctx.moveTo(x,y);
                }
                break;
            case 'move':
                if (x-offsetLeft >= 0 && x-offsetLeft <= width && y-offsetTop >= 0 && y-offsetTop <= height) {
                    this.ctx.lineTo(x, y);
                    this.ctx.stroke();
                }
                break;
            case 'end':
                //console.log(this.signCanvas.toDataURL());
                break;
        }
    }
    

    clearSign = () => {
        let { width, height} = this.signCanvas;
        let ctx = this.signCanvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
    };

    onResize = () => {
        this.signCanvas.width = this.props.canvasWidth || window.innerWidth;
        this.signCanvas.height = window.innerHeight > this.props.canvasHeight ? this.props.canvasHeight : window.innerHeight;
    };

    componentDidMount() {
        this.signCanvas = document.getElementById("signCanvas");
        this.signCanvas.width = this.props.canvasWidth || window.innerWidth;
        this.signCanvas.height = window.innerHeight > this.props.canvasHeight ? this.props.canvasHeight : window.innerHeight;
        this._initPanel();

        window.addEventListener('resize', this.onResize);
    }

    
    componentWillumount() {
        window.removeEventListener('resize', this.onResize);
    }
    
    

    render() {
        let {canvasWidth, canvasHeight} = this.props;
        return (
            <div className="SignPanel" style={{height: canvasHeight}} onResize={this.onResize}>
                <canvas id='signCanvas' className="SignPanel-cavas">
                    你的浏览器不支持此功能
                </canvas>
                <div className="SignPanel-option">
                    <button onClick={this.clearSign}>重输</button>
                    <button>确定</button>
                </div>
            </div>
        );
    }
}