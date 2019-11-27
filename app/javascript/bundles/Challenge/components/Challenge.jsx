import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal';

export default class Challenge extends Component {
    state = {
        challenges: [],
        challengeSelect: {tips: []},
        modalIsOpen: false,
        icons: [
            [<i key={1} className="fas fa-globe-americas"></i>],
            [<i key={2} className="fas fa-medal"></i>],
            [<i key={3} className="fas fa-hand-holding-usd"></i>],
            [<i key={4} className="fas fa-comment-dollar"></i>],
            [<i key={5} className="fas fa-temperature-high"></i>],
            [<i key={6} className="fas fa-users"></i>],
            [<i key={7} className="fas fa-handshake"></i>],
            [<i key={8} className="fas fa-share-alt"></i>],
            [<i key={9} className="fas fa-history"></i>],
            [<i key={10} className="fas fa-check-double"></i>],
            [<i key={11} className="fas fa-power-off"></i>],
        ]
    }

    allChallenges = () => {
        axios.get(`/challenges.json`)
            .then(res => this.setState({ challenges: res.data}))
            
    }

     // MODAL
    openModal = value => {
        this.setState({
          challengeSelect: this.state.challenges[value],
          modalIsOpen: true
        });

    };

    closeModal = () => {
      this.setState({ modalIsOpen: false });
    };



    render(){
        const { challenges, challengeSelect } = this.state
        return(
            <div>
                <div className="wrapperChallenge">
                    <h1>Challenges</h1>
                    <hr></hr>
                    <div className="containerChallenge">
                        <div className="wrapperAllChallenge">
                        <h2>Big Challenges</h2>
                            <div className="bigChallenges">
                            {   
                                challenges.map((theChallenge, i) => {
                                    if(theChallenge.points >= 99){
                                        return( 
                                            <div
                                            className="biger"
                                            key={i}
                                            id={i}
                                            onClick={() => this.openModal(i)}
                                            >
                                                <div className="upSmallWrapper">
                                                    <span>Points: {theChallenge.points}</span>
                                                    <div className="referencesIcon">
                                                        {this.state.icons[i]}
                                                    </div>
                                                </div>
                                                <div className="theTitle">
                                                    <span>{theChallenge.title}</span>
                                                </div>
                                                <div className="smallBottom">
                                                    <button 
                                                    onClick={() => this.openModal(i)}
                                                    >
                                                        Tips and Docs
                                                    </button>
                                                    <div className="beautyCircle"></div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                            </div>
                        </div>
                        <div className="wrapperAllChallenge">
                        <h2>Monthly Challenges</h2>
                            <div className="regularChallenges">
                                {
                                    challenges.map((theChallenge, i) => {
                                        if(theChallenge.points < 99){
                                            return(
                                                <div
                                                className="regular"
                                                key={i}
                                                id={i}
                                                onClick={() => this.openModal(i)}
                                                >
                                                    <div className="smallWrapper">
                                                        <span>Points: {theChallenge.points}</span>
                                                        <div className="referencesIcon">
                                                            {this.state.icons[i]}
                                                        </div>
                                                    </div>
                                                    <div className="theTitle">
                                                        <span>{theChallenge.title}</span>
                                                    </div>
                                                    <div className="smallBottom">
                                                        <button 
                                                        onClick={() => this.openModal(i)}
                                                        key={i}
                                                        id={i}
                                                        >
                                                            Tips and Docs
                                                        </button>
                                                        <div className="beautyCircle"></div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        contentLabel="GREENLINK"
                        ariaHideApp={false}
                    >
                        <div className="contentModal">
                        <div onClick={this.closeModal}><i className="fas fa-times"></i></div>
                            <div className="descriptionChallenge">
                                <div
                                    id={challengeSelect.id}
                                    className="bodyChallenge"
                                >
                                    <h2>{challengeSelect.title}</h2>
                                    <p>{challengeSelect.description}</p>
                                </div>
                                <div className="tipsForChallenge">
                                    {
                                        challengeSelect.tips.map((eachTip, i) => (
                                            <div
                                            key={i}
                                            id={i}
                                            className="wrapperTips"
                                            >
                                                <div className="numberTips">
                                                    <h3>0{i + 1} <span> / 0{challengeSelect.tips.length}</span></h3>
                                                </div>
                                                <div className="bodyTips">
                                                    <span>{eachTip.title}</span><br></br>
                                                    <span>Type: {eachTip.type_id}</span>
                                                    <p>{eachTip.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.allChallenges()
    }
}
