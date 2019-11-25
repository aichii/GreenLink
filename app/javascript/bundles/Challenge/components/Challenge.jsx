import React, { Component } from 'react'
import axios from 'axios'
import styles from './challenge.module.css'
import CustomStyleModal from './modal.module.css'
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
                <div className={styles.wrapperChallenge}>
                    <h1>Challenges</h1>
                    <hr></hr>
                    <div className={styles.containerChallenge}>
                        <div className={styles.wrapperAllChallenge}>
                        <h2>Big Challenges</h2>
                            <div className={styles.bigChallenges}>
                            {   
                                challenges.map((theChallenge, i) => {
                                    if(theChallenge.points >= 99){
                                        return( 
                                            <div
                                            className={styles.biger}
                                            key={i}
                                            id={i}
                                            onClick={() => this.openModal(i)}
                                            >
                                                <div className={styles.upSmallWrapper}>
                                                    <span>Points: {theChallenge.points}</span>
                                                    <div className={styles.referencesIcon}>
                                                        {this.state.icons[i]}
                                                    </div>
                                                </div>
                                                <div className={styles.theTitle}>
                                                    <span>{theChallenge.title}</span>
                                                </div>
                                                <div className={styles.smallBottom}>
                                                    <button 
                                                    onClick={() => this.openModal(i)}
                                                    >
                                                        Tips and Docs
                                                    </button>
                                                    <div className={styles.beautyCircle}></div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                            </div>
                        </div>
                        <div className={styles.wrapperAllChallenge}>
                        <h2>Monthly Challenges</h2>
                            <div className={styles.regularChallenges}>
                                {
                                    challenges.map((theChallenge, i) => {
                                        if(theChallenge.points < 99){
                                            return(
                                                <div
                                                className={styles.regular}
                                                key={i}
                                                id={i}
                                                onClick={() => this.openModal(i)}
                                                >
                                                    <div className={styles.smallWrapper}>
                                                        <span>Points: {theChallenge.points}</span>
                                                        <div className={styles.referencesIcon}>
                                                            {this.state.icons[i]}
                                                        </div>
                                                    </div>
                                                    <div className={styles.theTitle}>
                                                        <span>{theChallenge.title}</span>
                                                    </div>
                                                    <div className={styles.smallBottom}>
                                                        <button 
                                                        onClick={() => this.openModal(i)}
                                                        key={i}
                                                        id={i}
                                                        >
                                                            Tips and Docs
                                                        </button>
                                                        <div className={styles.beautyCircle}></div>
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
                        style={CustomStyleModal}
                        className={CustomStyleModal.Modal}
                        overlayClassName={CustomStyleModal.Overlay}
                        contentLabel="GREENLINK"
                        ariaHideApp={false}
                    >
                        <div className={CustomStyleModal.contentModal}>
                        <div onClick={this.closeModal}><i className="fas fa-times"></i></div>
                            <div className={CustomStyleModal.descriptionChallenge}>
                                <div
                                    id={challengeSelect.id}
                                    className={CustomStyleModal.bodyChallenge}
                                >
                                    <h2>{challengeSelect.title}</h2>
                                    <p>{challengeSelect.description}</p>
                                </div>
                                <div className={CustomStyleModal.tipsForChallenge}>
                                    {
                                        challengeSelect.tips.map((eachTip, i) => (
                                            <div
                                            key={i}
                                            id={i}
                                            className={CustomStyleModal.wrapperTips}
                                            >
                                                <div className={CustomStyleModal.numberTips}>
                                                    <h3>0{i + 1} <span> / 0{challengeSelect.tips.length}</span></h3>
                                                </div>
                                                <div className={CustomStyleModal.bodyTips}>
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
