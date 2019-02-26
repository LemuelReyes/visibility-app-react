// 
let visibility = false;

const app = {
    title: 'Visibility Toggle',
    message: '',
};

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <p>
                    Hey. these are the details that are revealed.
                </p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();