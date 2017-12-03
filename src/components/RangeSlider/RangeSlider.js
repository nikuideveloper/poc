import React, { Component } from 'react'

import Slider from 'react-rangeslider';
class RangeSlider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sliderYears:25,
            sliderAmt:350000
          }
    }
    handleChangeStart = () => {
        console.log('Change event started')
      };
    
      handleChangeYear = value => {
        this.setState({
            sliderYears: value
        })
      };
      handleChangeAmt = value => {
        this.setState({
            sliderAmt: value
        })
      };
      handleChangeComplete = () => {
        console.log('Change event completed')
      };
    render() {
    return (
        <div className="row">
                    <div className="jumbotron BGcolor-white">
                        <div className="col-sm-12 sliderBorder">
                            <div className="col-sm-6">
                                <h3>LOAN AMOUNT (AUD)</h3>
                                <div className='slider'>
                                    <Slider
                                    min={50000}
                                    max={350000}
                                    value={this.state.sliderAmt}
                                    onChangeStart={this.handleChangeStart}
                                    onChange={this.handleChangeAmt}
                                    onChangeComplete={this.handleChangeComplete}
                                    />
                                    <div className="sliderRanges">
                                        <div className='pull-left'>Minimum Eligible<p className="font14">50,000</p></div>
                                        <div className='text-center'></div>
                                        <div className='pull-right'>Maximum Eligible<p className="font14">350,000</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h3>TENTURE(YEARS)</h3>
                                <div className='slider'>
                                    <Slider
                                    min={2.0}
                                    max={25.0}
                                    value={this.state.sliderYears}
                                    onChangeStart={this.handleChangeStart}
                                    onChange={this.handleChangeYear}
                                    onChangeComplete={this.handleChangeComplete}
                                    />
                                    <div className="sliderRanges">
                                        <div className='pull-left'>Minimum<p className="font14">2.0 Years</p></div>
                                        <div className='text-center'></div>
                                        <div className='pull-right'>Maximum<p className="font14">25.0 Years</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
};

export default RangeSlider;
