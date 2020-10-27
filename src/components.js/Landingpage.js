import React,{ Component } from 'react';
import { Cell, Grid, __MDLBasicComponent } from 'react-mdl';

class Landingpage extends Component {
    render(){
        return(
            <div style={{width: '100%',margin : 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.toogit.com/uploads/15456/ProfileImage/1234.jpg"
                            alt="avtar"
                            className="avtar-img"
                        />
                        <div className="banner-txt">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | Jquery | React | React Native | PHP | Mysql | MongoDB | Elastic Search | Kibana </p>
                            <div className="social">
                                {/* linkednin */}
                                <a href="http://google.com" rel = "noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    {/* GITHUB */}

                                    <a href="http://google.com" rel = "noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )

    }
}

export default Landingpage;