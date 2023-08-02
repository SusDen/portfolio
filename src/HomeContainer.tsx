import "./app.scss";

interface IProps {
    children: JSX.Element;
}

function HomeContainer({children}: IProps): JSX.Element {
    return (
        <div>
            {children}
        </div>
    )
}


export default HomeContainer;
