import React, { Component } from 'react';
import Slideshow from './Slideshow';
import GoogleApiComponent from './GoogleApiComponent';
import Video from './Video';

class Main extends Component {
    constructor(props) {
        super(props);
        this.forusRef = React.createRef();
        this.referencesRef = React.createRef();
        this.contactRef = React.createRef();
        this.homeRef = React.createRef();
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
        this.handleScrollDirection = this.handleScrollDirection.bind(this);
        this.changeScrollDirection = this.changeScrollDirection.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
        this.move = this.move.bind(this);
        this.state = {
            scrollDirection: false,
            loaded: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.move(this.props.scrollLinkClicked);
        this.setState({
            loaded: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    scrollToMyRef(ref) {   // run this method to execute scrolling. 
        window.scrollTo({
            top: ref.current.offsetTop - 50,
            behavior: "smooth"   // Optional, adds animation
        });
    }

    move(direct) {
        switch (direct) {
            case 'home':
                this.scrollToMyRef(this.homeRef);
                this.changeScrollDirection(false);
                break;
            case 'forus':
                this.scrollToMyRef(this.forusRef);
                this.changeScrollDirection(true);
                break;
            case 'references':
                this.scrollToMyRef(this.referencesRef);
                this.changeScrollDirection(true);
                break;
            case 'contact':
                this.scrollToMyRef(this.contactRef);
                this.changeScrollDirection(true);
                break;
            default:
                this.scrollToMyRef(this.homeRef);
                this.changeScrollDirection(false);
                break;
        }
    }

    handleScrollDirection() {
        const currentDirection = !this.state.scrollDirection;
        if (currentDirection) {
            this.scrollToMyRef(this.contactRef);
        }
        else {
            this.scrollToMyRef(this.homeRef);
        }
    }

    changeScrollDirection(direct) {
        this.setState({
            scrollDirection: direct
        });
    }

    listenToScroll() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height;

        const home = winScroll / this.referencesRef.current.offsetHeight;

        this.setState({
            scrollDirection: home > scrolled
        });
    }

    setHomeLoadingClass(loaded) {
        return loaded ? ' home-loaded' : ' home-not-loaded';
    }

    render() {
        return (
            <React.Fragment>
                <section className='section-home' ref={this.homeRef}>
                    <Slideshow />
                    <div id="mybutton" onClick={this.handleScrollDirection}>
                        <span className={'scroll-button' + (this.state.scrollDirection ? ' up' : ' down')}></span>
                    </div>
                </section>
                <section ref={this.forusRef}>
                    <div className='container pt-60 pb-60'>
                        <div className='text-center'>
                            <h2 className="section-heading">A lőtérről</h2>
                            <img src={require('./images/bullet_2.PNG')} />
                        </div>
                        <div className="section-subheading">
                        </div>
                    </div>
                    <div className="container">
                        <Video />
                    </div>
                </section>
                <section ref={this.referencesRef}>
                </section>
                <section ref={this.contactRef}>
                    <div className='container pt-60 pb-60'>
                        <div className='text-center'>
                            <h2 className="section-heading">Kapcsolat</h2>
                            <img src={require('./images/bullet_2.PNG')} />
                        </div>
                        <div className="section-subheading">
                        </div>
                    </div>
                    <GoogleApiComponent />
                </section>
            </React.Fragment >
        );
    }
}

export default Main