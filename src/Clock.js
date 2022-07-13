import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.namePlayer = 'Player ' + props.player;
        this.player_num = props.player;

        this.turn = props.turn;
        this.getPlayer = props.active;
        this.state = { 
            dt: new Date(),
            hours: 2,
            minutes: 1,
            seconds: 29
        };
    }   
    
        displayTime =()=>{
            let h = this.state.hours;
            let m = this.state.minutes;
            let s = this.state.seconds;

            return h + ':' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s:'0' + s);
        };

        updateTime = () => {
           if (this.player_num != this.getPlayer()) return;
            let h = this.state.hours;
            let m = this.state.minutes;
            let s = this.state.seconds;

            if (s > 0) {
                this.setState({
                    seconds: s - 1
                });
            } else{
           if(m > 0) {
                    this.setState({
                        seconds: 59,
                        minutes: m - 1
                    });
                } else { 
                    if(h > 0){
                        this.setState({
                            hours: h - 1,
                            minutes: 59,
                            seconds: 59
                        });
                    }
                }
            }
        }
            componentDidMount () {
                setInterval(this.updateTime, 1000);
            };

    render() {
        return(
            <div >
                {this.namePlayer}
                <br />
                <input className="btn" type="button" value="click" onClick={this.turn} />
                <br /><span>{this.displayTime()}</span>
                <div className="circle">
                    <div className="circl">
                        <span className="span"></span>       
                    </div> 
                </div>
             </div>
        );
    }
}



