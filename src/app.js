class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            visibility: false
        };
        this.revealDetails = this.revealDetails.bind(this);
        }
    revealDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.revealDetails}>{ this.state.visibility ? 'Hide details' : 'Show details' }</button>
                { this.state.visibility && (
                    <p>
                        Hey. these are the details that are revealed. Woot.
                    </p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));